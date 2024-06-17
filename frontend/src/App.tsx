import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Login from "./pages/Login.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Reader from "./pages/Reader.tsx";
import Profile from "./pages/Profile.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./theme.tsx";
import { useAppDispatch, useAppSelector } from "./state/hooks.ts";
import { RootState } from "./state/store.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reader",
    element: <Reader />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default function App() {
  // const [theme, setTheme] = React.useState(
  //   localStorage.getItem("theme") || "light"
  // );

  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const dispatch = useAppDispatch();
  const handleThemeChange = () => {
    dispatch({
      type: "theme/setTheme",
      payload: theme === "light" ? "dark" : "light",
    });
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  // const handleThemeChange = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   console.log("Theme changed");
  //   console.log(theme);
  //   localStorage.setItem("theme", theme);
  // };
  return (
    <>
      <div className="dark:bg-black bg-white">
        <Navbar handleThemeChange={handleThemeChange} initialTheme={theme} />
        <RouterProvider router={router} />
      </div>
    </>
  );
}
