import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate,Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Home from './components/Home';
import Browse from './components/Browse';





function App() {

  const user=useSelector((store)=>store.user);
 
  

  
  return (
    <div>
     {/* <Login/>
     <ToastContainer />  */}
     <Routes>
     <Route path={"/"} element={!user.email ? <Home/>:<Navigate to="/browse"/>}/>
      <Route path={"/login"} element={!user.email ? <Login/>:<Navigate to="/browse"/>}/>
      <Route path={"/browse"} element={user.email ?<Browse/> : <Navigate to="/login"/> }/>
     </Routes>
     
     
     <ToastContainer/>
    
    </div>
  )
}

export default App
