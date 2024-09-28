// import logo from './logo.svg';
import './App.css';
import { Banner } from './Components/Banner';
import NavigationBar from './Components/NavigationBar';
import Skills from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contacts';
import { EmailForm } from './Components/EmailForm'
import { Newsletter } from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <EmailForm />
      {/* <Newsletter/> */}
      { <Footer /> }
    </div>
  );
}

export default App;
