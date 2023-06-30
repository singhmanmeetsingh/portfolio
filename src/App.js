import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Brief from './components/brief/Brief';
import Stack from './components/stack/Stack';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Brief/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
