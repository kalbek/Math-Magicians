import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <div className=" ">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
