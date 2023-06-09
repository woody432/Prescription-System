import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Hospital from './Hospital';
import Pharmacy from './Pharmacy';
import Home from './Home';
import Information from './Information';
import Informationpharmacy from './Informationpharmacy';
import Addinfo from './Addinfo';
import Addinfophar from './Addinfophar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/Hospital"} element={<Hospital/>}></Route>
        <Route path={"/Pharmacy"} element={<Pharmacy/>}></Route>
        <Route path={"/Information"} element={<Information/>}></Route>
        <Route path={"/Informationpharmacy"} element={<Informationpharmacy/>}></Route>
        <Route path={"/Addinfo"} element={<Addinfo/>}></Route>
        <Route path={"/Addinfophar"} element={<Addinfophar/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
