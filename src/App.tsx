import "./App.css";
import { PatientPage } from "./pages/PatientPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<PatientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
