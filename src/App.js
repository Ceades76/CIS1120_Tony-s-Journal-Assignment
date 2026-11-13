import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Journal from "./pages/Journal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  );
}
