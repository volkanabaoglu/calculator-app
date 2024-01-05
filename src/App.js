import "./App.css";
import Calculator from "./Calculator";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculator App</h1>
      </header>
      <Calculator />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
