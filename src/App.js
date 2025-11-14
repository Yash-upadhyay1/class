import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home Page</h1>

              {/* Rendering Card Components */}
              <Card title="Card 1" description="This is card number 1" />
              <Card title="Card 2" description="This is card number 2" />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
