import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="container flex-spaced">
      <div className="title">
        <h1>Math Magicians</h1>
      </div>
      <div className="menu flex gap-1">
        <Link className="link" to="./" name="home">
          <div className="Home ptr">Home</div>
        </Link>
        |
        <Link className="link" to="./Calculator" name="calculator">
          <div className="calc ptr">Calculator</div>
        </Link>
        |
        <Link className="link" to="./Quotes" name="quotes">
          <div className="Quote ptr">Quote</div>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
