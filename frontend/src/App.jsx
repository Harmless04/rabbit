import {BrowserRoutrer, Route, Routes} from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
const App = () => {
  return (
    
    <BrowserRoutrer>
    <Routes>
      <Route path="/"element={<UserLayout />}>
      {/* User Layout */}
      </Route>
      <Route>{/*Admin Layou*/}</Route>
    </Routes>
    </BrowserRoutrer>
  );
};

export default App;
