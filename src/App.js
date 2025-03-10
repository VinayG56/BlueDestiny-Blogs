import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"; 
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{ BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import Footer from "./pages/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
  
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={user ? <Home/> : <Register />}/>
        <Route path="/about" element={user ? <About/> : <About />}/>
        <Route path="/contact" element={user ? <Contact/> : <Contact />}/>
        <Route path="/write" element={user ? <Write/> : <Register />}/>
        <Route path="/login" element={user ? <Home/> : <Login />}/>
        <Route path="/settings" element={user ? <Settings/> : <Register />}/>
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
