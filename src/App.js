// import logo from './logo.svg';
import './App.css';
import BotNav from './components/BotNav';
import ContactCard from './components/ContactCard';
import StartNewChat from './components/StartNewChat';

function App() {
  return (
    <div className="App">
      <BotNav/>
      <ContactCard/>
      <StartNewChat />
    </div>
  );
}

export default App;
