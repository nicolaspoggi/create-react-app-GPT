import reactLogo from './assets/react.svg'
import fleekLogo from './assets/fleekLogo.svg'
import fleekMark from './assets/fleekMark.svg'
import plusIcon from './assets/plus.svg'
import viteLogo from './assets/vite.svg'
import react, { useState } from 'react';

function App() {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple',
    'cyan', 'magenta', 'black', 'brown', 'orange'
  ];

  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="App">
      <div className="square" style={{ backgroundColor: colors[colorIndex] }}>
        <h1 onClick={handleClick}>Click me</h1>
      </div>
    </div>
  );
}

export default App