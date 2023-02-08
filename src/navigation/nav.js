import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Favourite } from "../pages/Favourite/Favourite";
import { Recent } from "../pages/Recent/Recent";
import { HomeComponent } from "../pages/HomeComponent/HomeComponent";

export const Nav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="recent" element={<Recent />} />
        </Route>
        <Route path="*" element={<>No Page Found</>} />
      </Routes>
    </BrowserRouter>
  );
};
