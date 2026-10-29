import { PrefsProvider } from "./prefs";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <PrefsProvider>
      <Header />
      <main className="w">
        <Intro />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </PrefsProvider>
  );
}
