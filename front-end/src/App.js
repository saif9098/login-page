import './App.css';
import Nav from './nav'
import Footer from './Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './signup';
import Privatecomponent from './privateComponent';
import Login from './login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element ={<Privatecomponent/>}>
        <Route path="/" element={<h1>profile component</h1>}/>
        <Route path="/logout" element={<h1>loged out</h1>}/>
        <Route path="/about" element={<h1>saif raza</h1>}/>
      </Route>
        
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
       
        
        </Routes> 
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
