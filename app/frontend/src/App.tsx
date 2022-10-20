import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RosterPage from "./pages/RosterPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rosters" element={<PrivateRoute path={<RosterPage />} />} />
        <Route path="/" element={<PrivateRoute path={<RosterPage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
};

export default App;
