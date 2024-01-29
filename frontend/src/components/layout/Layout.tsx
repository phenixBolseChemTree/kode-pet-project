import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header";
import styles from './layout.module.css'

const Layout = () => {

  return (
    <div className={styles.root}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;
