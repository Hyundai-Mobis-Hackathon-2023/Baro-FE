import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CategoryChoice from '../pages/CategoryChoice/CategoryChoice';
import SignUp from '../pages/SignUp/SignUp';
import Temp from '../pages/Temp/Temp';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/CategoryChoice' element={<CategoryChoice />} />
      <Route path='/temp' element={<Temp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
