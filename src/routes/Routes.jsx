import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CategoryChoice from '../pages/CategoryChoice/CategoryChoice';
import SignUp from '../pages/SignUp/SignUp';
import Temp from '../pages/Temp/Temp';
import AIStart from '../pages/AIStart/AIStart';
import DialNumberChoice from '../pages/DialNumberChoice/DialNumberChoice';
import Start from '../pages/Start/Start';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/category-choice' element={<CategoryChoice />} />
      <Route path='/temp' element={<Temp />} />
      <Route path='/number_choice' element={<DialNumberChoice />} />
      <Route path='/ai-start' element={<AIStart />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
