import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="container flex-spaced">
      <div className="title">
        <h1>Math Magicians</h1>
      </div>
      <div className="menu flex gap-1">
        <Link className="link" to="./Home">
          <div className="Home ptr">Home</div>
        </Link>
        |
        <Link className="link" to="./Calculator">
          <div className="calc ptr">Calculator</div>
        </Link>
        |
        <Link className="link" to="./Quotes">
          <div className="Quote ptr">Quote</div>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
