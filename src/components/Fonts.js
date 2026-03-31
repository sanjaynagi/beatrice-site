import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');

    body {
      font-family: 'Lora', serif;
    }
  `}
  />
);

export default Fonts;
