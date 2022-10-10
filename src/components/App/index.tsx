import { useThemeContext } from "../../context/ThemeContext";
import Header from "../Header";
import "./App.scss";

const App = (): JSX.Element => {
  const [theme] = useThemeContext();
  return (
    <div className="app" data-theme={theme}>
      <Header />
    </div>
  );
};

export default App;
