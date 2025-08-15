import { Suspense, lazy } from "react";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";

const Header = lazy(() => import("./Header"));
const MainMovieContainer = lazy(() => import("./MainMovieContainer"));
const SecondaryMovieContainer = lazy(() => import("./SecondaryMovieContainer"));

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Loading main content...</div>}>
        <MainMovieContainer />
      </Suspense>

      <Suspense fallback={<div>Loading more movies...</div>}>
        <SecondaryMovieContainer />
      </Suspense>
    </div>
  );
};

export default Browse;
