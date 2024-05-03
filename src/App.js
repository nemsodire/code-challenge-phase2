import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionsTable from './components/TransactionsTable'
 
const transactions =[
  { date: '2024-05-01', description: 'Salary', category: 'Income', amount: '$1000' },
  { date: '2024-05-02', description: 'Rent', category: 'Expense', amount: '$300' },
  { date: '2024-05-03', description: 'Entertainment', category: 'Expense', amount: '$50' },
];
function App() {
  return (
   <div className="App">
     
     
     
      <Header/>
      <SearchBar/>
      <TransactionForm/>
      <TransactionsTable transactions={transactions}/>
      
      


    </div>
  );
}

export default App;
