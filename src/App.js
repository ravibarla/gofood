// import Navbar from "./components/Navbar";
import Home from "./screens/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login.js";
import Signup from "./screens/Signup.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    // <>
    // <Home/>
    // </>
    <Router >
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
