import "./style/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Cases } from "./pages/Cases";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Breadcrumbs from "./components/UI/Breadcrumbs/Breadcrumbs";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div className="App__wrapperCrumbs">
                    <nav className="App__breadcrumbs">
                        <Breadcrumbs />
                    </nav>
                </div>
                <Main>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/cases" element={<Cases />} />
                    </Routes>
                </Main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
