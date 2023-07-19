import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import RecipePage from "../pages/RecipePage";

const RegularRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </HashRouter>
  );
};

export default RegularRouter;
