import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
//pages & components
import Home from './pages/Home';

function App() {
  return (
    <div className=" font-sans">
      <BrowserRouter>
          <NavBar/>
        <div className="p-16 max-md:p-4">
          <Routes>
            <Route path='/workout-tracker'element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
