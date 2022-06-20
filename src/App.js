

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Registration from './Pages/Login/Registration/Registration';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import NoMatch from './Pages/Shared/Nomatch/NoMatch';
import CheckOut from './Pages/Checkout/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        <Route index element={<Breakfast></Breakfast>}> </Route>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          
          <Route  path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        
          
          </Route>
        <Route path='/login' element={<Login></Login> }></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut> }></Route>
        <Route path='/register' element={<Registration></Registration> }></Route>
        <Route path="*" element={<NoMatch />} />
       
       
      </Routes>
    </div>
  );
}

export default App;
