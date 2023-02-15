import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryChoice from '../pages/CategoryChoice/CategoryChoice';
import Login from '../pages/Login/Login';
import Temp from '../pages/Temp/Temp';
import AIStart from '../pages/AIStart/AIStart';
import DialNumberChoice from '../pages/DialNumberChoice/DialNumberChoice';
import NewUser from '../pages/NewUser/NewUser';
import Start from '../pages/Start/Start';
import Preset from '../pages/Preset/Preset';
import MakeStart from '../pages/MakeStart/MakeStart';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/login' element={<Login />} />
      <Route path='/category-choice' element={<CategoryChoice />} />
      <Route path='/temp' element={<Temp />} />
      <Route path='/preset/:selectedCategory' element={<Preset />} />
      <Route path='/number_choice' element={<DialNumberChoice />} />
      <Route path='/ai-start' element={<AIStart />} />
      <Route path='/new-user' element={<NewUser />} />
      <Route path='/make-start' element={<MakeStart />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
