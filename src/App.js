import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import RandomPage from "./components/RandomPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/:filter" element={<Body />} />
                    <Route path="/random" element={<RandomPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
