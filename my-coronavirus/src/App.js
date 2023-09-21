import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';

import Home from './Components/Home';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getdoctor } from './redux/DoctorSlice';
import { getUser, userCurrent } from './redux/UserSlice';
// import PrivateRoute from './Routes/PrivateRouter';
import Prevention from './Components/Prevention';


function App() {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();

    const [ping, setping] = useState("");
    useEffect(() => {

        if (isAuth) {
            dispatch(userCurrent());

        }
        dispatch(getdoctor());
        dispatch(getUser())
     
    }, [ping])

  
    const users = useSelector((state) => state.user?.users);
    const doctors = useSelector((state) => state.doctor?.doctors);
  return (
    <div >




   
   <Routes>
                <Route path="/" element={<Home />} />
          
                <Route path="/about" element={<About />} />
       
                <Route path="/contact" element={<Contact />} />
                <Route path="/prevention" element={<Prevention />} />
             

            
            </Routes>
    </div>
  );
}

export default App;
