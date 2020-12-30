import './App.css';
import useSound from 'use-sound';

import music from './sound/Happy_New_Year.mp3';

function App() {

  const [melody] = useSound(music);

  return (
    <div className="App">
      <h2>Поздравляем с Новым 2021 годом!</h2>
      <h1>ИП Прибой</h1>
      <p>г.Уральск</p>
      <p>priboy2005@mail.ru</p>
      <button onClick={melody}>melody</button>
    </div>
  );
}

export default App;
