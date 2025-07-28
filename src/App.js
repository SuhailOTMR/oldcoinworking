
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import Index from './website/routes/index.js';
import CoinLootyLoader from './Common/loader/CoinLootyLoader.js';

function App() {
  return (
    <div className="App">
      <CoinLootyLoader></CoinLootyLoader>
      <Toaster />
      <Index />
    </div>
  );
}

export default App;
