import { Routes, Route } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import Market from "containers/Market";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import "./App.css";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContextC } from "context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { Skeleton } from "components/Skeleton/Skeleton";

const lightTheme = {
  body: "#e5e5e5",
};

const darkTheme = {
  body: "black",
};

function App() {
  const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState("#4169da");
  const context = useContext(ThemeContextC);
  const isDarkTheme = context.theme === "dark";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // let element = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "about", element: <About /> },
  //   { path: "login", element: <Login /> },
  //   { path: "*", element: <NotFoundPage /> },
  // ]);
  // return <MainLayout>{element}</MainLayout>;
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/market" element={<Market />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
