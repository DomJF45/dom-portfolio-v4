import { motion } from "framer-motion";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./views/home";
import "./App.css";
import { Projects } from "./views/projects";
import Blog from "./views/blog";
import { NotFound } from "./views/NotFound";
import { ProjectPage } from "./views/projects/ProjectPage";

const WithNav = () => {
  return (
    <motion.div className="px-3 sm:px-20 py-5 flex flex-col gap-5 sm:h-screen relative min-h-screen">
      <Outlet />
      <Navbar />
    </motion.div>
  );
};

const router = createBrowserRouter([
  {
    element: <WithNav />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Projects />,
        path: "/projects",
      },
      {
        element: <ProjectPage />,
        path: "/projects/:projectID",
      },
      {
        element: <Blog />,
        path: "/blog",
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  useDarkMode();
  return <RouterProvider router={router} />;
}

export default App;
