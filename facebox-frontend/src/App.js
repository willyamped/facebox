import './App.css';
import AddPerson from './components/AddPerson';
import Appbar from './components/Appbar';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <AddPerson/>
      <PeopleList/>
    </div>
  );
}

export default App;
