import "./App.css";
import sound from "./assets/background.mp3";
import chime from "./assets/chime.mp3";
import { useState } from "react";
import wish from "./wish";

function App() {
  const [wished, setWish] = useState("");
  const [music, setMusic] = useState(false);
  const backgroundMusic = new Audio(sound);
  const chimes = new Audio(chime);

  const handleClick = () => {
    if ("vibrate" in navigator) {
      // vibration API supported
      window.navigator.vibrate(500);
    }
    if (!music) {
      setMusic(true);
      backgroundMusic.play();
    }

    if (wished) {
      setWish("");
      return;
    }
    chimes.play();
    const random = Math.floor(Math.random() * 246);
    setWish(wish[random]);
  };

  return (
    <div className="App" onClick={handleClick}>
      <div className="container">
        {wished && <p className="text">{wished}</p>}
      </div>
    </div>
  );
}

export default App;
