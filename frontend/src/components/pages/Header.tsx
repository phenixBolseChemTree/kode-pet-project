import { Link, Outlet } from 'react-router-dom';

const Header = () => (
      <>
      <nav>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          <li>
            <Link to='/one'>Page One</Link>
          </li>
          <li>
            <Link to='/two'>Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
);

export default Header;