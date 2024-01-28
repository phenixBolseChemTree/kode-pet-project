import { useEffect } from 'react';
import './App.css';
import MainPage from './components/pages/MainPage';
import { usersSliceActions } from './slices/reducers/usersSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (usersSliceActions.fetchDataAsync());
  }, [ dispatch ]);


  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
