import './App.css';
import Header from './components/header/header';
import Todos from './components/todos-container/todos-container';

function App() {
  return (
    <div className="app">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
