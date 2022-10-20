import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RosterPage from "./pages/RosterPage";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import AuthRoute from "./routes/AuthRoute";
import RegisterPage from "./pages/RegisterPage";

initializeApp(config.firebaseConfig);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/roster"
          element={
            <AuthRoute>
              <RosterPage />
            </AuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <AuthRoute>
              <RosterPage />
            </AuthRoute>
          }
        />
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
