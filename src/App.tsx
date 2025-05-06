import { type FC } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileProvider } from './context/ProfileContext';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          <Header />
          <main>
            <Hero />
            <Services />
            <Skills />
            <Portfolio />
          </main>
          <Footer />
        </div>
      </ProfileProvider>
    </ThemeProvider>
  );
};

export default App;