import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Math Magician App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quotes">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
