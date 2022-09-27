import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Task from './pages/Task.jsx'
import "./App.css";
import UsersModule from "./modules/UsersModule";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const Task = lazy(() => import("./pages/Task"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loadinggg....</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="task" element={<Task />} />
            <Route path="users/*" element={<UsersModule />} />
            {/* add no match path */}
            <Route path="*" element={<div>404 - Not Found </div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
export default App;
