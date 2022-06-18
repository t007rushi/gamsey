import "./App.css";
import { Footer } from "./frontend/Layout/Footer/Footer";
import { Header } from "./frontend/Layout/Header/Header";
import { Main } from "./frontend/Layout/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
