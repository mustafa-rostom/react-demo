import './App.css'
import Users from './components/Users'
import Task from './components/Task'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Users />
      {/* <Task /> */}
    </div>
  );
}

export default App;
