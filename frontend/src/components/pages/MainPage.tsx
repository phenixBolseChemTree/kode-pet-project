import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { usersSliceActions } from '../../slices/reducers/usersSlice';
import All from './all/All';
import Designers from './designers/Designers';
import Analysts from './analysts/Analysts';
import Managers from './managers/Managers';
import Io from './io/Io';
import styles from './mainPage.module.css';
import Layout from '../layout/Layout';

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state:any) => state.users.users);

  console.log(users);
  

  useEffect(() => {
    // Вы можете диспетчить ваше действие fetchDataAsync здесь, если это необходимо
    // dispatch(usersSliceActions.fetchDataAsync());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<All />} />
            <Route path="designers" element={<Designers />} />
            <Route path="analysts" element={<Analysts />} />
            <Route path="managers" element={<Managers />} />
            <Route path="io" element={<Io />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainPage;