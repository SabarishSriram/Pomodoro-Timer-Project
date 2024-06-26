import './App.css';
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import {useState} from "react";
import SettingsContext from './components/SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setworkMinutes] = useState(45)
  const [breakMinutes, setbreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setworkMinutes,
        setbreakMinutes
      }}>
      

        {showSettings ? <Settings /> : <Timer />}

      </SettingsContext.Provider>
      
    </main>
  );
}

export default App;