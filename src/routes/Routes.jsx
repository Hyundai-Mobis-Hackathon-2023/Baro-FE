import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryChoice from "../pages/CategoryChoice/CategoryChoice";
import Login from "../pages/Login/Login";
import Temp from "../pages/Temp/Temp";
import AIStart from "../pages/AIStart/AIStart";
import DialNumberChoice from "../pages/DialNumberChoice/DialNumberChoice";
import NewUser from "../pages/NewUser/NewUser";
import Start from "../pages/Start/Start";
import Preset from "../pages/Preset/Preset";
import MakeStart from "../pages/MakeStart/MakeStart";
import InstalledWidget from "../pages/InstalledWidget/InstalledWidget";
import CustomWidget from "../pages/CustomWidget/CustomWidget";
import Custom from "../pages/Custom/Custom";
import AIChat from "../pages/AIChat/AIChat";
import Purchase from "../pages/Purchase/Purchase";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/start" element={<Start />} />
      <Route path="/" element={<Login />} />
      <Route path="/category-choice" element={<CategoryChoice />} />
      <Route path="/temp" element={<Temp />} />
      <Route path="/preset/:selectedCategory" element={<Preset />} />
      <Route path="/number-choice" element={<DialNumberChoice />} />
      <Route path="/ai-start" element={<AIStart />} />
      <Route path="/new-user" element={<NewUser />} />
      <Route path="/make-start" element={<MakeStart />} />
      <Route path="/installed-widget" element={<InstalledWidget />} />
      <Route path="/custom-widget" element={<CustomWidget />} />
      <Route path="/custom" element={<Custom />} />
      <Route path="/ai-chat" element={<AIChat />} />
      <Route path="/purchase" element={<Purchase />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
