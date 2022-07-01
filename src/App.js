import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Body from "./components/Body";

const Footer = lazy(() => import("./components/Footer"));
const RandomPage = lazy(() => import("./components/RandomPage"));

function App() {
    return (
        <BrowserRouter>
            <div className="text-center min-h-[calc(100vh-10rem)]">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route path="/:filter" element={<Body />} />
                        <Route path="/random" element={<RandomPage />} />
                    </Routes>
                </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
