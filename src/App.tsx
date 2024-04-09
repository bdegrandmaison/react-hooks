import './App.css';
import { DocumentTitleComponent } from './components/DocumentTitleComponent';
import { DefaultComponent } from './components/DefaultComponent';
import { ToggleComponent } from './components/ToggleComponent';
import { PreviousComponent } from './components/PreviousComponent';
import { PreferredLanguageComponent } from './components/PreferredLanguageComponent';

function App() {
  return (
    <div className="App">
      <h1>Hooks rewritten</h1>
      <DocumentTitleComponent />
      <DefaultComponent />
      <ToggleComponent />
      <PreviousComponent />
      <PreferredLanguageComponent />
    </div>
  );
}

export default App;
