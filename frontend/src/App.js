import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
//pages & components
import Home from './pages/Home';

function App() {
  return (
    <div className=" font-sans">
      <BrowserRouter>
          <NavBar/>
        <div className="">
          <Routes>
            <Route path='/'element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
