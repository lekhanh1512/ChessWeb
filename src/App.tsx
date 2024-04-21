import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import { Toaster } from "sonner";
import Loader from "./components/common/Loader";
import Home from "./pages/HomePage";
import routes from "./routes";

const DefaultLayout = lazy(() => import("./components/layouts/DefaultLayout"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Toaster */}
      <Toaster richColors closeButton position="top-right" />
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {routes.map((route, index) => {
            const {
              path,
              component: Component,
            } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                        <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
