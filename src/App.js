import './App.css';
// import Login from "./Login";
import Login2 from "./Login2";
import Signup2 from './Signup2';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Signup/> */}

      {/* <Login2/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login2/>} />
            <Route path="/signup" element={<Signup2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
