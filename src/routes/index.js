import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Character } from "../components/Characters/Character";
import { Home } from "../components/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
