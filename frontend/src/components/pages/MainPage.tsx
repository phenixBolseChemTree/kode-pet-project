import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from '../Pages';
import Header from './Header';
import All from './All';

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} >
              <Route path="/" element={<All />}/>
              <Route path="one" element={<PageOne />} />
              <Route path="two" element={<PageTwo />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainPage;