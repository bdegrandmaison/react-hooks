import './App.css';
import { UseDocumentTitleComponent } from './components/UseDocumentTitleComponent';
import { UseDefaultComponent } from './components/useDefaultComponent';

function App() {
  return (
    <div className="App">
      <h1>Hooks rewritten</h1>
      <UseDocumentTitleComponent />
      <UseDefaultComponent />
    </div>
  );
}

export default App;
