import Home from './Routing/Home';
import LawyerDash from './Routing/LawyerDash';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUpClient from './components/SignupClient';
import SignUpLawyer from './components/SignupLawyer';
import LawyerDashboard from './pages/LawyerDashboard';

function App() {
  return (

    <>
    <Router>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/Services' element = {<Services/>}/>
      <Route path = '/About' element = {<About/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path = '/signup-client' element = {<SignUpClient/>}/>
      <Route path = '/signup-lawyer' element = {<SignUpLawyer/>}/>
      <Route path = '/lawyer-dash' element = {<LawyerDashboard/>}/>
    </Routes>
    </Router>
    </>    
  );
}

export default App
