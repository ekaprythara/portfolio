import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { DotGrid } from "interactive-dot-grid";
import AnimatedCursor from "react-animated-cursor";
import SelectedWork from "./components/SelectedWork";
import Separator from "./components/Separator";
import Experience from "./components/Experience";

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
    // State untuk mendeteksi apakah layar berukuran Desktop (>= 1024px)
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Cek ukuran layar saat pertama kali load
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreenSize();

        // Event listener jika layar di-resize
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {/* Hanya render AnimatedCursor & Background jika benar-benar di Desktop */}
            {isDesktop && (
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
                        showSystemCursor
                    />
                    <Background />
                </>
            )}

            <div className="relative z-40">
                <Header />
                <MainLayout>
                    <Home />
                    <Separator />
                    <SelectedWork />
                    <Separator />
                    <Experience />
                    <Separator />
                    <Profile />
                </MainLayout>
                <Footer />
            </div>
        </>
    );
};

export default App;
