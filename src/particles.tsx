import AOS from 'aos';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent = ({ id }: ParticlesComponentProps) => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 0.7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <Particles id={id} options={options} />; 
};

export default ParticlesComponent;