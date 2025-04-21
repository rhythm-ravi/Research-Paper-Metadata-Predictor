// import React from 'react';
// import { useCallback } from 'react';
// import { Particles } from '@tsparticles/react';
// import { loadFull } from 'tsparticles';

// const BackgroundAnimation = () => {
//   // useCallback ensures the init function is memoized (recommended)
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);
//   console.log("I am here");
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: false,  // becuase wrapped in a fixed box
//         background: {
//           color: {
//             value: '#1976d2',
//           },
//         },
//         particles: {
//           number: {
//             value: 500,
//           },
//           color: {
//             value: ['#ffffff', '#00ff00', '#ff0000'],
//           },
//           shape: {
//             type: 'circle',
//           },
//           move: {
//             enable: true,
//             speed: 2,
//           },
//         },
//       }}
//     />
//   );
// };

// export default BackgroundAnimation;

import React, { useCallback } from 'react'; 
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const BackgroundAnimation = () => {
  // Memoize particles initialization to avoid unnecessary re-renders
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,  // Disable full-screen to ensure it fits within a container
          background: {
            color: '#1976d2', // Background color for the particles container
          },
          particles: {
            number: {
              value: 80, // Adjust the number of particles
            },
            color: {
              value: ['#ffffff', '#00ff00', '#ff0000'], // Particle colors
            },
            shape: {
              type: 'circle', // Shape of the particles
            },
            size: {
              value: 5, // Size of particles
            },
            move: {
              enable: true,
              speed: 3, // Speed of the particle movement
              direction: 'none', // Particles will move randomly
            },
          },
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
