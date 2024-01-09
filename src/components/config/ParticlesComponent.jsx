import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = ({ id }) => {
  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -2,
    },
    particles: {
      color: { value: "#5271ff" },
      number: {
        value: 30,
        density: { enable: true, value_area: 800 },
      },
      links: {
        enable: true,
        distance: 210,
        color: { value: "#ddd" },
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 4 },
      },
      opacity: { value: { min: 0.3, max: 0.7 } },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100, speed: 0.2 },
      },
    },
  }), []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
