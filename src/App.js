import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Header from "./Components/Layouts/Header";
import Home from "./Pages/Home";
import Footers from "./Components/Layouts/Footers";
function App() {
  return (
    <div>
      <Header/>
      <Home />
      <Footers />
    </div>
  );
}

export default App;
