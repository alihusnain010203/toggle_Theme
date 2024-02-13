import { useState } from "react";
import "./App.css";
import themeContext from "./context/themeContext";
import { ThemeProvider } from "./context/themeContext";
import Theme from "./Theme";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider value={{ theme: theme, setTheme: setTheme }}>
      <Navbar />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
