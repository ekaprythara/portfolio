import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";
import { DotGrid } from "interactive-dot-grid";
import AnimatedCursor from "react-animated-cursor";
import SelectedWork from "./components/SelectedWork";

export function Background() {
    useEffect(() => {
        const grid = new DotGrid({
            color: "250, 204, 20",
            dotMin: 1,
            dotMax: 4,
            spacing: 37,
            zIndex: -50,
            baseAlpha: 0.05,
        });

        return () => grid.destroy();
    }, []);
    return null;
}

const App = () => {
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={32}
                color="250, 204, 20"
                outerAlpha={0}
                innerScale={1}
                outerScale={1}
                outerStyle={{
                    border: "2.5px solid #FACC14",
                }}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                ]}
            />
            <Background />
            <div className="relative z-50">
                <Header />
                <MainLayout>
                    <Home />
                    <hr className="text-neutral-900" />
                    <SelectedWork />
                    <hr className="text-neutral-900" />
                    <Profile />
                </MainLayout>
                <Footer />
            </div>
        </>
    );
};

export default App;
