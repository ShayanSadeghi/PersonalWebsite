import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Info from "./components/Info";
import HomeInfo from "./components/HomeInfo";
import Papers from "./components/Papers";
import Awards from "./components/Awards";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div style={{ display: "flex", marginTop: "80px" }}>
      <BrowserRouter>
        <Header />
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
          <Route path="/papers" element={<Papers />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
