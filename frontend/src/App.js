import './App.css';
import { ImageUpload } from './home';
import { Routes, Route } from "react-router-dom";
import Report from './Components/Report'

function App() {
  return (
      <Routes>
        <Route path="/" element={<ImageUpload />}>
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
  );
}

export default App;
