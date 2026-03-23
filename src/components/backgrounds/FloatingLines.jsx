import { useEffect, useRef } from "react";
import "./FloatingLines.css";

const FloatingLines = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const linesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Colors from your scheme
    const colors = ["#2cdb29", "#000000", "#8f8990"];

    // Create lines
    const createLines = () => {
      const lines = [];
      const numberOfLines = 50;

      for (let i = 0; i < numberOfLines; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: Math.random() * 2 + 1,
          bendOffset: Math.random() * Math.PI * 2,
          bendSpeed: Math.random() * 0.02 + 0.01,
        });
      }
      linesRef.current = lines;
    };
    createLines();

    // Mouse tracking with damping
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse position with damping (0.06)
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      linesRef.current.forEach((line) => {
        // Calculate distance from mouse for parallax effect
        const dx = mouseRef.current.x - line.x;
        const dy = mouseRef.current.y - line.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const parallaxStrength = 0.3;
        const parallaxX = (dx / distance) * parallaxStrength * 20 || 0;
        const parallaxY = (dy / distance) * parallaxStrength * 20 || 0;

        // Update bend
        line.bendOffset += line.bendSpeed;

        // Calculate bend strength (-0.9)
        const bendStrength = -0.9;
        const bend =
          Math.sin(line.bendOffset) * line.length * bendStrength * 0.1;

        // Draw curved line
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.globalAlpha = 0.6;

        const startX = line.x + parallaxX;
        const startY = line.y + parallaxY;
        const endX = startX + Math.cos(line.angle) * line.length;
        const endY = startY + Math.sin(line.angle) * line.length;
        const controlX =
          (startX + endX) / 2 + Math.cos(line.angle + Math.PI / 2) * bend;
        const controlY =
          (startY + endY) / 2 + Math.sin(line.angle + Math.PI / 2) * bend;

        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(controlX, controlY, endX, endY);
        ctx.stroke();

        // Move line
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Wrap around screen
        if (line.x < -line.length) line.x = canvas.width + line.length;
        if (line.x > canvas.width + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = canvas.height + line.length;
        if (line.y > canvas.height + line.length) line.y = -line.length;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="floating-lines-canvas" />;
};

export default FloatingLines;
