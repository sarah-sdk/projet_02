import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Country from "../pages/Country";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}
