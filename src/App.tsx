import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Seo from "./components/Seo";
import HomePage from "./pages/HomePage";

const DesignsPage = lazy(() => import("./pages/DesignsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Seo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/trial" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
