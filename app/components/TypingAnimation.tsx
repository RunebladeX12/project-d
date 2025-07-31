import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const App: React.FC = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Hello, I'm Karthic Creative\ndesigner based in india.",
          2000,
          "I'm a Writer\nand a Designer.",
          2000,
          "I'm a Designer\nand a Designer.",
          2000,
          `Welcome to my website!\nI'm a Developer`,
          2000,
        ]}
        speed={{type: 'keyStrokeDelayInMs', value: 100}}
        repeat={Infinity}
        style={{
            background: 'linear-gradient(to right, #ff0000, #0000ff,#ffffff,#ffffff )',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            whiteSpace: 'pre-line',
            fontSize: '3.5rem',
            textAlign: 'center',
            height: '115px',
            width: '900px',
            display: 'block',
          }}
          
      />
    </div>
  );
};

export default App;
