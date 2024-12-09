import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Filters from "./pages/Filters";
import Chances from "./pages/Chances";
import Desk from "./pages/Desk";
import Measures from "./pages/Measures";
import Preview from "./pages/Preview";
import Print from "./pages/Print";
import Scanner from "./pages/Scanner";
import Tips from "./pages/Tips";
import { CameraKit } from "./utils/CameraKitContext";
import UserActivityTracker from "./components/IdleTimer";
import DisableMultiTouch from "./components/DisableMultiTouch";
import ErrorWrapper from "./components/ErrorHandler";

function App() {
  return (
    <>
      <DisableMultiTouch />
      <div className="relative grid place-items-center">
        <div className="grid place-items-center scale-[45%] h-full absolute">
          <div className="w-[1080px] h-[1920px] border border-primary bg-primary-white relative">
            <Router>
              <ErrorWrapper />
              <CameraKit>
                <UserActivityTracker />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/filters" element={<Filters />} />
                  <Route path="/chances" element={<Chances />} />
                  <Route path="/desk" element={<Desk />} />
                  <Route path="/measures" element={<Measures />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/print" element={<Print />} />
                  <Route path="/scanner" element={<Scanner />} />
                  <Route path="/tips" element={<Tips />} />
                </Routes>
              </CameraKit>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
