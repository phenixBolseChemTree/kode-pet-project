import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const [formText, setFormText] = useState<string>('');

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormText(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.searchBlock}>
        <input type="text" value={formText} onChange={handleEdit} />
      </div>
      <div className={styles.navBlock}>
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
      </div>
      <hr />
    </div>
  );
};

export default Header;
