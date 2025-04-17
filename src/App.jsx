import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const MyLibraryPage = lazy(() => import("./pages/MyLibraryPage/MyLibraryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecommendedPage = lazy(() =>
  import("./pages/RecommendedPage/RecommendedPage")
);
const ReadingPage = lazy(() =>
  import("./pages/RecommendedPage/RecommendedPage")
);
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MainLayout = lazy(() => import("./MainLayout/MainLayout"));

function App() {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/library" element={<MyLibraryPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </div>
  );
}

export default App;
