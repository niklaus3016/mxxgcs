import React from 'react';

interface RadarDataPoint {
  label: string;
  value: number; // 0-100
  code: string;
}

interface RadarChartProps {
  data: RadarDataPoint[];
  size?: number;
  color?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  size = 280,
  color = '#38BDF8',
}) => {
  const center = size / 2;
  const radius = (size / 2) * 0.65;
  const numAxes = data.length;

  // Angles for each axis (0 is top)
  const angleStep = (Math.PI * 2) / numAxes;

  // Concentric polygon levels (20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getCoordinates = (index: number, valPercent: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = radius * valPercent;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Polygon path points
  const points = data.map((d, i) => getCoordinates(i, Math.max(0.1, d.value / 100)));
  const polygonPointsString = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Concentric Grid Circles / Polygons */}
        {levels.map((level, lvlIdx) => {
          const levelPoints = data
            .map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            })
            .join(' ');

          const circleRadius = radius * level;

          return (
            <circle
              key={lvlIdx}
              cx={center}
              cy={center}
              r={circleRadius}
              fill="none"
              stroke="rgba(148, 163, 184, 0.15)"
              strokeDasharray={lvlIdx === levels.length - 1 ? undefined : '3,3'}
              strokeWidth="1"
            />
          );
        })}

        {/* Axis Lines */}
        {data.map((_, i) => {
          const outerCoord = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={outerCoord.x}
              y2={outerCoord.y}
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Data Area Fill */}
        <polygon
          points={polygonPointsString}
          fill={`${color}33`}
          stroke={color}
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Vertices */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill={color}
              stroke="#0F172A"
              strokeWidth="2"
              className="transition-all duration-700 ease-out"
            />
          </g>
        ))}

        {/* Axis Labels */}
        {data.map((d, i) => {
          const labelCoord = getCoordinates(i, 1.25);
          return (
            <g key={i} className="text-xs font-semibold">
              <text
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#E2E8F0"
                className="text-[12px] font-medium"
              >
                {d.label}
              </text>
              <text
                x={labelCoord.x}
                y={labelCoord.y + 14}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                className="text-[11px] font-bold"
              >
                {d.value}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
