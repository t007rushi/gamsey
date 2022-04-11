import "./App.css";
import { Footer } from "./frontend/Layout/Footer/Footer";
import { Header } from "./frontend/Layout/Header/Header";
import { Main } from "./frontend/Layout/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
