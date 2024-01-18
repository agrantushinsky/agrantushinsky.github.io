import { useEffect } from 'react';
import './App.css';
import Timeline from './pages/Timeline';

function App() {
  useEffect(() => {
    document.title = "The Cuban Revolution"
  }, []);

  // Just gonna always display the timeline...
  return (
    <div className="App">
      <Timeline/>
    </div>
  );
}

export default App;
