import './App.css';
import Header from './components/Header';
import JokeContainer from './components/JokeContainer';

const App = () => {
  return (
    <div>
      <Header title = "GET A JOKE" />
      <JokeContainer />
      
    </div>
  )
}

export default App;
