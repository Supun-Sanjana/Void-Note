// import React from 'react';

// const CosmicRadialGradient = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden ">
//       {/* Main Radial Gradient Background */}
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(ellipse 800px 600px at 20% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//             radial-gradient(ellipse 600px 800px at 80% 60%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
//             radial-gradient(ellipse at center, rgba(30, 27, 75, 1) 0%, rgba(15, 15, 40, 1) 50%, rgba(10, 10, 30, 1) 100%)
//           `
//         }}
//       />
      
//       {/* Floating particles/stars effect */}
//       <div className="absolute inset-0">
//         {[...Array(90)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white opacity-20 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 3 + 1}px`,
//               height: `${Math.random() * 3 + 1}px`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${Math.random() * 2 + 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Glowing orbs for extra cosmic effect */}
//       <div 
//         className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
//         style={{
//           background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
//           top: '10%',
//           right: '15%',
//         }}
//       />
      
//       <div 
//         className="absolute w-80 h-80 rounded-full opacity-15 blur-2xl"
//         style={{
//           background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
//           bottom: '20%',
//           left: '10%',
//         }}
//       />

//       {/* Content overlay - you can replace this with your actual content */}
      
//     </div>
//   );
// };

// export default CosmicRadialGradient;