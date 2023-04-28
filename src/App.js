import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <>
      <div className="calculator flex-spaced">
        <Calculator />
        <Quotes />
      </div>
    </>
  );
}

export default App;
