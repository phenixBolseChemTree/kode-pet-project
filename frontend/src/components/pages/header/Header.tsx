import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const [ formText, setFormText ] = useState<string>('');

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

            <Link to='/'>All</Link>


            <Link to='/designers'>Designers</Link>


            <Link to='/analysts'>Analysts</Link>


            <Link to='/managers'>Managers</Link>


            <Link to='/io'>Io</Link>

          </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
