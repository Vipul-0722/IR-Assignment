import logo from './logo.svg';
import './App.css';
import AirportDataExplorer from './components/airport';
import AirportAnalytics from './components/airportAnalytics';

function App() {
  return (
    <div className="App">
      <AirportDataExplorer></AirportDataExplorer>
      <AirportAnalytics></AirportAnalytics>
    </div>
  );
}

export default App;
