import { Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import '../css/App.css';
import Home from "./pages/home/Home";
import DetailCar from "./components/main/section/detailCar/DetailCar";

function App() {
  return (
    <div className="App">
      <Header/>
      <DetailCar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
