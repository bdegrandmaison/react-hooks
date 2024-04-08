import usePrevious from '../hooks/usePrevious';
import { useState } from 'react';

function getRandomColor() {
  const colors = ['green', 'blue', 'purple', 'red', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const PreviousComponent = () => {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  return (
    <section>
      <h2>Hook 4: usePrevious</h2>
      <h3>Knowing the previous value of the state</h3>
      <p>
        This hook returns null on the first render, then when the value is updated , it gives the
        previous value of the state that has just changed.
      </p>
      <button onClick={handleClick}>Change color</button>
      <article className="colors">
        <figure>
          <div style={{ background: `${previousColor}`, height: '50px', width: '50px' }} />
          <figcaption>Previous color: {previousColor}</figcaption>
        </figure>
        <figure>
          <div style={{ background: `${color}`, height: '50px', width: '50px' }} />
          <figcaption>Current color: {color}</figcaption>
        </figure>
      </article>
    </section>
  );
};
