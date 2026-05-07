import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const container = searchParams.get("container") || "endless-tech-portal";
  const lines = searchParams.get("lines") || "50";

  // In Docker, use the service name 'log-manager'. 
  // Fallback to localhost for local dev if needed.
  const LOG_MANAGER_URL = process.env.LOG_MANAGER_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${LOG_MANAGER_URL}/logs?container_name=${container}&lines=${lines}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error(`Log Manager responded with ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Log fetch failed:", error);
    // Fallback to simulated logs if backend is unavailable to maintain UI fidelity
    return NextResponse.json({
      logs: [
        { time: new Date().toISOString(), event: "FALLBACK_MODE: Connection to Log Manager failed.", status: "OFFLINE", type: "error", origin: "PORTAL" },
        { time: new Date().toISOString(), event: "SYSTEM_INITIALIZED", status: "STABLE", type: "success", origin: "PORTAL" }
      ]
    });
  }
}
