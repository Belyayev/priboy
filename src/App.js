import './App.css';
import useSound from 'use-sound';
import Snowfall from 'react-snowfall'

import music from './sound/Happy_New_Year.mp3';

function App() {

  const [play] = useSound(music);

  return (
    <div className="App">
      <Snowfall snowflakeCount={250}/>
      <h2>компания ИП Прибой поздравляет Вас</h2>
      <h1>С Новым 2021 годом!</h1>
      <p className="message">Дорогие друзья, с праздником! От всей души хотим пожелать, чтобы в наступающем 2021 году Белого Металлического Быка в вашей семье все были здоровы, рядом были верные и добрые друзья, в делах вас ждали успех и удача, а жизнь была наполнена счастьем и любовью!</p>
      <button onClick={play}>музыкальный подарок</button>
      <p>г.Уральск</p>
      <p>priboy2005@mail.ru</p>
    </div>
  );
}

export default App;
