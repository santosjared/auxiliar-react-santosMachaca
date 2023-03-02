import Search from './components/search';
import Movies from './components/movies';
import { Theme } from './theme/Theme';
function App() {
  return (
    <div className="App">
      <Theme>
      <Search></Search>
      <Movies></Movies>
      </Theme>
    </div>
  );
}

export default App;
