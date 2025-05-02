import "./App.css";
import { PatientPage } from "./pages/PatientPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SqlEditor } from "./pages/SqlEditor";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<PatientPage />} />
        <Route path="/search-patients" element={<SqlEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
