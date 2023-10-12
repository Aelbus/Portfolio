import Header from "./components/header";
import Router from "./router.js";
import Footer from "./components/footer";
import "./styles/app.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
