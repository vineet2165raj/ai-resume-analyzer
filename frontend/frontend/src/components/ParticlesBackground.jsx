import React from "react";

import Particles from "react-tsparticles";

const ParticlesBackground = () => {

  return (

    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 40,
          },

          color: {
            value: "#38bdf8",
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: { min: 1, max: 4 },
          },

        },

        detectRetina: true,
      }}

      className="absolute inset-0 -z-10"
    />

  );

};

export default ParticlesBackground;