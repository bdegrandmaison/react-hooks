import './App.css';
import { DocumentTitleComponent } from './components/DocumentTitleComponent';
import { DefaultComponent } from './components/DefaultComponent';
import { ToggleComponent } from './components/ToggleComponent';

function App() {
  return (
    <div className="App">
      <h1>Hooks rewritten</h1>
      <DocumentTitleComponent />
      <DefaultComponent />
      <ToggleComponent />
    </div>
  );
}

export default App;
