import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeTemplete from "./Routing/HomeTemplete";
import ContactTemplete from "./Routing/ContactTemplete";
import AboutTemplete from "./Routing/AboutTemplete";
import ProjectsTemplete from "./Routing/ProjectsTemplete";
import AboutProjectTemplete from "./Routing/AboutProjectTemplete";
import NotFound from "./Routing/NotFound";
import MainTemplete from "./Routing/MainTemplete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainTemplete />}>
          <Route index={true} element={<HomeTemplete />} />
          <Route path="contact" element={<ContactTemplete />} />
          <Route path="about" element={<AboutTemplete />} />
          <Route path="projects" element={<ProjectsTemplete />} />
          <Route
            path="projects/:projectName"
            element={<AboutProjectTemplete />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
