import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import SvgSprite from "./components/SvgSprite/SvgSprite";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { apiGetCurrentUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";

import { ToastContainer } from "react-toastify";

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

          <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
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
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
