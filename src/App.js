import { useState } from 'react';
import './App.css';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  const [backgroundStyle, setBackgroundStyle] = useState('background-black');

  return (
    <div className={`App ${backgroundStyle}`}>
      <BackgroundChanger setBackgroundStyle={setBackgroundStyle} />
    </div>
  );
}

export default App;