import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/:filter" element={<Body />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
