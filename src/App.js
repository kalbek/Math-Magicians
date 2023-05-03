import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <>
      <div className=" ">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
