"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "00:00", value: 400 },
  { time: "04:00", value: 300 },
  { time: "08:00", value: 500 },
  { time: "12:00", value: 800 },
  { time: "16:00", value: 600 },
  { time: "20:00", value: 900 },
  { time: "23:59", value: 700 },
];

export function MetricsChart({ title, value, unit, color = "#22d3ee" }: { title: string, value: string, unit: string, color?: string }) {
  return (
    <div className="p-6 rounded-2xl glass glow-border overflow-hidden h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">{title}</p>
          <div className="flex items-baseline gap-1 mt-1">
            <h4 className="text-2xl font-bold text-white tracking-tight">{value}</h4>
            <span className="text-xs text-slate-400 font-mono">{unit}</span>
          </div>
        </div>
        <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-green-400 font-mono">
          +12.5%
        </div>
      </div>

      <div className="h-32 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-slate-950 border border-slate-800 p-2 rounded text-[10px] font-mono text-cyan-400">
                      {payload[0].value} {unit}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#gradient-${title})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
