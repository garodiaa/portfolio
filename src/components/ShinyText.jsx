const ShinyText = ({ text, disabled = false, speed = 5, className = '', baseColor = '#b5b5b5a4' }) => {
  if (disabled) {
    return <span className={`text-[${baseColor}] ${className}`}>{text}</span>;
  }

  const animationDuration = `${speed}s`;
  const gradient = `linear-gradient(120deg, ${baseColor} 40%, rgba(255, 255, 255, 0.85) 50%, ${baseColor} 60%)`;

  return (
    <span
      className={`bg-clip-text text-transparent inline-block animate-shine ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };