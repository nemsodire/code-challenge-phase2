import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Transactions from './components/Transactions';
import AddTranscaction from './components/AddTransactions';


 function App() {
  return (
   <div className="App">
     
     
     
      <Header/>
      <SearchBar/>
      <AddTranscaction/>
      <Transactions/>
      
      


    </div>
  );
}

export default App;
