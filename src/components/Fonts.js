import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');

    @font-face {
      font-family: 'Cal Sans';
      src: url('/fonts/CalSans-SemiBold.ttf');
      src: url('/fonts/CalSans-SemiBold.woff');
      src: url('/fonts/CalSans-SemiBold.woff2');
      font-style: oblique;
      font-weight: 600;
      font-display: swap;
    }

    body {
      font-family: 'Lora', serif;
    }
  `}
  />
);

export default Fonts;