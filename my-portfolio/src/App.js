import Header from "./components/header";
import Router from "./router.js";
import Footer from "./components/footer";
import Background from "./components/background";
import "./styles/app.css";
const App = () => {
  return (
    <div className="App">
      <Background />
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
