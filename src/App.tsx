import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import { useContext } from 'react';
import Context from './components/context/Context';

function App() {
  const context = useContext(Context);
  if (!context) return;

  return (
    <>
      <Header />
      <Presentation />
    </>
  )
}

export default App
