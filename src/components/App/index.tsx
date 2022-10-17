import { useThemeContext } from "../../context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header";

import "./App.scss";
import SingleCountrie from "../../pages/SingleCountrie";
import Countries from "../../pages/Countries";

const App = (): JSX.Element => {
  const [theme] = useThemeContext();

  return (
    <div className="app" data-theme={theme}>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:nameId" element={<SingleCountrie />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
