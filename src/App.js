import './App.css';
import Envelope from './Components/Envelope/envelope';
import Letter from './Components/Letter/letter';
import Invite from './Components/Invite/invite';
import { useState } from'react';


function App() {

  const [isOpen,setIsOpen] = useState(false);

  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationFinished(true);
  };

  const appClass = animationFinished ? 'app switch' : 'app';

  setTimeout(handleOpen,3000);

  function handleOpen(){
    setIsOpen(true);
  }


  return (
    <div className={appClass}>
      {animationFinished ? <Invite/> :
      <div onClick={handleOpen}>
        <Envelope closure={isOpen}/>
        <Letter closure={isOpen} onAnimationEnd={handleAnimationEnd}/>
      </div>
      }
    </div>
  );
}

export default App;
