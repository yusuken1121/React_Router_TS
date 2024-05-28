import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/Home";
import { Page1 } from "./routes/Page1";
import { Page2 } from "./routes/Page2";
import { ErrorPage } from "./routes/ErrorPage";
import { Page1DetailA } from "./routes/Page1/Page1DetailA";
import { Page1DetailB } from "./routes/Page1/Page1DetailB";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex items-center justify-around w-20 h-40 text-center ">
          <Link className="link-base mb-2 mr-2" to="/">
            Home
          </Link>
          <Link className="link-base mb-2 mr-2" to="/page1">
            Page1
          </Link>
          <Link className="link-base mb-2" to="/page2">
            Page2
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1">
            <Route index element={<Page1 />} />
            <Route path="detailA" element={<Page1DetailA />} />
            <Route path="detailB" element={<Page1DetailB />} />
          </Route>
          <Route path="page2" element={<Page2 />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
