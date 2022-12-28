import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import { useAuthContext } from './hooks/useAuthContext';
//pages & components
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';

function App() {
  const {user} = useAuthContext()
  return (
    <div className=" font-sans">
      <BrowserRouter>
          <NavBar/>
        <div className="p-16 max-md:p-4">
          <Routes>
            <Route path='/workout-tracker'element={user ? <Home/> : <Navigate to={'/login'}/>}/>
            <Route path='/login'element={!user ? <Login/> : <Navigate to={'/workout-tracker'}/>}/>
            <Route path='/signup'element={!user ? <Signup/> : <Navigate to={'/workout-tracker'}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
