import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import searchIcon from '../../../assets/images/search.svg';
import listIcon from '../../../assets/images/list-ui-alt.svg';

const Header = () => {
  const [ formText, setFormText ] = useState<string>('');

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormText(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.searchBlock}>
        <div className={styles.inputContainer}>
        <input className={styles.input} type="text" value={formText} onChange={handleEdit} placeholder='Введи имя, тег, почту...' ></input>
        <img className={styles.searchImg} src={searchIcon} alt="search" />
        <img className={styles.listImg} src={listIcon} alt="list" />
        </div>
      </div>
      <div className={styles.navBlock}>
        <nav className={styles.nav}>
          <div className={styles.btnLink}>
            <Link className={styles.link} to='/'>All</Link>
          </div>
          <div className={styles.btnLink}>
            <Link className={styles.link} to='/designers'>Designers</Link>
          </div>
          <div className={styles.btnLink}>
            <Link className={styles.link} to='/analysts'>Analysts</Link>
          </div>
          <div className={styles.btnLink}>
            <Link className={styles.link} to='/managers'>Managers</Link>
          </div>
          <div className={styles.btnLink}>
            <Link className={styles.link} to='/io'>Io</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
