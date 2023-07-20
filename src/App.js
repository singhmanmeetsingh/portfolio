import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Brief from './components/brief/Brief';
import Stack from './components/stack/Stack';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Brief/>
      <Stack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
