import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import RandomPage from "./components/RandomPage";
import Footer from "./components/Footer";
function App() {
    return (
        <BrowserRouter>
            <div className="text-center min-h-[calc(100vh-10rem)]">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/:filter" element={<Body />} />
                    <Route path="/random" element={<RandomPage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
