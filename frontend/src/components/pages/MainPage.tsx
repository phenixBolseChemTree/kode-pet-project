import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import All from './All';
import Designers from './Designers';
import Analysts from './Analysts';
import Managers from './Managers';
import Io from './Io';

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} >
              <Route path="/" element={<All />}/>
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