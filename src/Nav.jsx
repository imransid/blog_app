import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/slices/themeSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  console.log("ok >>");

  return (
    <Router>
      <div className="App">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 m-4 border rounded bg-blue-500 text-white"
        >
          Toggle Theme
        </button>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Nav;
