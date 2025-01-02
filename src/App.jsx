import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { theme } from './styles/theme';
import Nav_bar from './components/nav_bar.component';
import Hero from './components/Hero.component';
import Nav_and_hero from './components/Nav_and_hero.component';
import About from './components/About.component';
import Services from './components/Services.components';
import Portfolio from './components/Portfolio.component';
import Achievements from './components/Achievements.component';
import Contact from './components/Contact.compoent';
import Footer from './components/Footer.component';

const AppContainer = styled.div`
  // padding-block: 2rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Nav_and_hero />
        <About />
        <Services />
        <Portfolio />
        <Achievements />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
