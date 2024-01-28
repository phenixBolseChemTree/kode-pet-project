import { Link, Outlet } from 'react-router-dom';

const Header = () => (
      <>
      <nav>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          <li>
            <Link to='/designers'>Designers</Link>
          </li>
          <li>
            <Link to='/analysts'>Analysts</Link>
          </li>
          <li>
            <Link to='/managers'>Managers</Link>
          </li>
          <li>
            <Link to='/io'>Io</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
);

export default Header;