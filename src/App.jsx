//import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom'
import React from 'react'

//for adding toastify content
import { ToastContainer } from 'react-toastify';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    onAuthStateChanged(auth , async(user) => {
      if(user) {
        //logged in
        console.log("user logged in: ", user.email);
        navigate('/');
      } else {
        //logged out
        console.log("user logged out");
        navigate('/login');
      }
    })
  }, []);

  return (
    <div>
      <div>
        {/*<button onClick={notify}>Notify!</button>*/}
        <ToastContainer theme='dark'/>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App