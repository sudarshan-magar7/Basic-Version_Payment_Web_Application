import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Signup} from "../src/pages/Signup"
import {Signin} from "../src/pages/Signin"
import {Dashboard} from "../src/pages/Dashboard"
import {SendMoney} from "../src/pages/SendMoney"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
