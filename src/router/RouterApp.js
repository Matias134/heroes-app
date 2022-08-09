import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../heroes/components/Navbar";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";


export const RouterApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
      </Routes>
    </>
  )
}
