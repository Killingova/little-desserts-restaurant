import React, { useEffect, useRef } from "react";

const MagicMouseTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const addParticle = (x, y) => {
      particles.current.push({
        x,
        y,
        size: Math.random() * 5 + 2,
        opacity: 1,
        fade: Math.random() * 0.05 + 0.02,
      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, index) => {
        p.opacity -= p.fade;
        if (p.opacity <= 0) {
          particles.current.splice(index, 1);
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 223, 0, ${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e) => {
      addParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MagicMouseTrail;