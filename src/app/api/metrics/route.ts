import { NextResponse } from "next/server";
import os from "os";

export async function GET() {
  try {
    const uptime = os.uptime();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsage = (usedMem / totalMem) * 100;
    
    // Simple CPU load simulation based on system load avg
    const loadAvg = os.loadavg()[0]; // 1 min load avg
    const cpuCount = os.cpus().length;
    const cpuUsage = Math.min((loadAvg / cpuCount) * 100, 100);

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      system: {
        platform: os.platform(),
        arch: os.arch(),
        cpus: cpuCount,
        uptime: uptime,
      },
      metrics: {
        cpuUsage: cpuUsage.toFixed(2),
        memUsage: memUsage.toFixed(2),
        agentLoad: (cpuUsage * 0.8 + Math.random() * 5).toFixed(2), // Weighted agent load
        activeNodes: 142, // Simulated active nodes for now
        latency: Math.floor(Math.random() * 5 + 10), // Simulated latency
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 });
  }
}
