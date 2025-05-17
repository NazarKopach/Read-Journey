import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { apiGetCurrentUser } from "./redux/auth/operations";
import { ToastContainer } from "react-toastify";

import Loader from "./components/Loader/Loader.jsx";
import SvgSprite from "./components/SvgSprite/SvgSprite.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const MyLibraryPage = lazy(() =>
  import("./pages/MyLibraryPage/MyLibraryPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const RecommendedPage = lazy(() =>
  import("./pages/RecommendedPage/RecommendedPage.jsx")
);
const ReadingPage = lazy(() => import("./pages/ReadingPage/ReadingPage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.jsx")
);
const MainLayout = lazy(() => import("./MainLayout/MainLayout.jsx"));

function App() {
  const isRefreshing = useSelector(selectUserIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <SvgSprite />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
            <Route element={<Dashboard />}>
              <Route path="library" element={<MyLibraryPage />} />
              <Route path="recommended" element={<RecommendedPage />} />
              <Route path="reading/:id" element={<ReadingPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
