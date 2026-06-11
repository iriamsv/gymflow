import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import StatsPage from "./pages/StatsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>

  <Navbar />

  <div className="min-h-screen p-6">

    <Routes>

      <Route
        path="/"
        element={<DashboardPage />}
      />

      <Route
        path="/workouts"
        element={<WorkoutsPage />}
      />

      <Route
        path="/stats"
        element={<StatsPage />}
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>

  </div>

</BrowserRouter>
  );
}

export default App;