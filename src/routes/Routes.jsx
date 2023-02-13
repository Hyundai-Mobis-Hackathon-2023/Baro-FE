import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CategoryChoice from '../pages/CategoryChoice/CategoryChoice';
import SignUp from '../pages/SignUp/SignUp';
import Temp from '../pages/Temp/Temp';
import SignUp from '../pages/SignUp/SignUp';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='/category_choice' element={<CategoryChoice />} />
      <Route path='/temp' element={<Temp />} />
      <Route path='/number_choice' element={<DialNumberChoice />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
