import { useState } from 'react'
import Placar from './components/placar'
import Joguinho from './components/joguinho';

function App() {
  const [placar, setPlacar] = useState({
    jogador: 0,
    computador: 0,
    empate: 0
  });



  return (
    <>
      <Joguinho placar={placar} setPlacar={setPlacar} />
      <Placar placar={placar} />
    </>
  )
}

export default App
