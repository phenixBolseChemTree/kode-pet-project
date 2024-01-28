import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { usersSliceActions } from '../../slices/reducers/usersSlice';
import Header from './Header';
import All from './All';
import Designers from './Designers';
import Analysts from './Analysts';
import Managers from './Managers';
import Io from './Io';

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state:any) => state.users.users);

  console.log(users);
  

  useEffect(() => {
    // Вы можете диспетчить ваше действие fetchDataAsync здесь, если это необходимо
    // dispatch(usersSliceActions.fetchDataAsync());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
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