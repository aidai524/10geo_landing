import { useRef, useEffect } from 'react';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
}

export function DotGrid({
  dotSize = 4,
  gap = 24,
  baseColor = '#3b82f6',
  activeColor = '#60a5fa',
  proximity = 120,
  className
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const initDots = () => {
      const dots: { x: number; y: number; vx: number; vy: number }[] = [];
      const cols = Math.ceil(canvas.width / gap) + 1;
      const rows = Math.ceil(canvas.height / gap) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap + gap / 2,
            y: j * gap + gap / 2,
            vx: 0,
            vy: 0
          });
        }
      }
      dotsRef.current = dots;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      dotsRef.current.forEach(dot => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = dotSize;
        let color = baseColor;

        if (dist < proximity) {
          const factor = 1 - dist / proximity;
          size = dotSize + dotSize * factor * 1.5;
          
          const baseRgb = hexToRgb(baseColor);
          const activeRgb = hexToRgb(activeColor);
          
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * factor);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * factor);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * factor);
          
          color = `rgb(${r}, ${g}, ${b})`;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
    };

    const hexToRgb = (hex: string) => {
      const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      if (!m) return { r: 0, g: 0, b: 0 };
      return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    let animationId: number;
    const animate = () => {
      drawDots();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity]);

  return (
    <canvas
      ref={canvasRef}
      className={`dot-grid-canvas ${className || ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto'
      }}
    />
  );
}
