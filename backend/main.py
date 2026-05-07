import docker
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from datetime import datetime

app = FastAPI(title="EndLessTech Log Manager")

# Enable CORS for the portal
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://portal:3000",
        "https://endlesstech.llc"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    # Initialize Docker client (assumes socket is mounted)
    client = docker.from_env()
except Exception as e:
    print(f"Error initializing Docker client: {e}")
    client = None

@app.get("/")
async def root():
    return {"status": "operational", "service": "Log Manager"}

@app.get("/logs")
async def get_logs(container_name: str = "endless-tech-portal", lines: int = 50):
    if not client:
        raise HTTPException(status_code=500, detail="Docker client not initialized")
    
    try:
        container = client.containers.get(container_name)
        # Fetch latest logs
        raw_logs = container.logs(tail=lines, timestamps=True).decode("utf-8")
        
        # Parse logs into structured format
        formatted_logs = []
        for line in raw_logs.strip().split("\n"):
            if not line: continue
            
            # Extract timestamp and message
            # Format: 2023-10-27T12:00:00.000000000Z message
            parts = line.split(" ", 1)
            timestamp = parts[0]
            message = parts[1] if len(parts) > 1 else ""
            
            # Determine log level/type
            log_type = "info"
            if "error" in message.lower() or "fail" in message.lower():
                log_type = "error"
            elif "warn" in message.lower():
                log_type = "warning"
            elif "success" in message.lower() or "✓" in message:
                log_type = "success"
                
            formatted_logs.append({
                "time": timestamp,
                "event": message.strip()[:60] + ("..." if len(message) > 60 else ""),
                "full_message": message.strip(),
                "status": "LOG_ENTRY",
                "type": log_type,
                "origin": container_name.upper()
            })
            
        return {"logs": formatted_logs[::-1]} # Return latest first
        
    except docker.errors.NotFound:
        raise HTTPException(status_code=404, detail=f"Container {container_name} not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/containers")
async def list_containers():
    if not client:
        return []
    return [{"name": c.name, "id": c.short_id, "status": c.status} for c in client.containers.list()]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
