
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Food from './Pages/Food';
import Fitness from './Pages/Fitness';
import Technology from './Pages/Technology';
import Hollywood from './Pages/Hollywood';
import Bollywood from './Pages/Bollywood';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <details> */}
     
        <Header/>
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bollywood' element={<Bollywood/>} />
        <Route path='/hollywood' element={< Hollywood/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/fitness' element={<Fitness/>} />
        <Route path='/food' element={<Food/>} />
    
        <Route path='*' element={<Details/>} />
       </Routes>
       </BrowserRouter>
            
       {/* </details> */}
      </header>
    </div>
  );
}

export default App;
