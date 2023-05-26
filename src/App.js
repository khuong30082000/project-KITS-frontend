import { Routes, Route } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import "./App.css";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContextC } from "context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const lightTheme = {
  body: "#e5e5e5",
};

const darkTheme = {
  body: "black",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#4169da");
  const context = useContext(ThemeContextC);
  const isDarkTheme = context.theme === "dark";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
        <div className="App">
          <RingLoader color={color} loading={loading} size={300} />
        </div>
      ) : (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
