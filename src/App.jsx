import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import SvgSprite from "./components/SvgSprite/SvgSprite";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const MyLibraryPage = lazy(() => import("./pages/MyLibraryPage/MyLibraryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecommendedPage = lazy(() =>
  import("./pages/RecommendedPage/RecommendedPage")
);
const ReadingPage = lazy(() => import("./pages/ReadingPage/ReadingPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MainLayout = lazy(() => import("./MainLayout/MainLayout"));

function App() {
  return (
    <div>
      <SvgSprite />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />

          <Route path="/" element={<MainLayout />}>
            <Route
              path="library"
              element={<PrivateRoute component={<MyLibraryPage />} />}
            />
            <Route
              path="reading"
              element={<PrivateRoute component={<ReadingPage />} />}
            />
            <Route
              path="recommended"
              element={<PrivateRoute component={<RecommendedPage />} />}
            />
            <Route
              path="*"
              element={<RestrictedRoute component={<NotFoundPage />} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
