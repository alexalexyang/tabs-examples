
import './App.css';
import ButtonTabs from './components/button-tabs.tsx';
import RadioTabs from './components/radio-tabs';
import { tabs } from './components/tabs';


function App() {
  return (
    <div className="App">
      <h2>Buttons tabs</h2>
      <ButtonTabs tabs={tabs} />

      <h2>Radio buttons tabs</h2>
      <RadioTabs tabs={tabs} />
    </div>
  );
}

export default App;
