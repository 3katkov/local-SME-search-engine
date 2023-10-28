import { Routes, Route } from "react-router-dom";
import DashboardScreen from "./components/dashboard/DashboardScreen";

// Develpment sandbox.

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </>
  );
};

export default App;
