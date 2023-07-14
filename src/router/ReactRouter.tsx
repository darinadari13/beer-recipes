import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import RecipePage from "../pages/RecipePage";

const RegularRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
};

export default RegularRouter;
