import { BrowserRouter, Routes, Route } from "react-router-dom";

import Info from "./components/Info";
import HomeInfo from "./components/HomeInfo";

import NotFound from "./components/NotFound";

function App() {
  return (
    <div style={{ display: "flex", marginTop: "80px" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Info />
                <HomeInfo />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
