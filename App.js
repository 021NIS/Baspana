import { StackNavigator } from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
  // TODO: Включите новую компоненту в стэк
});

export default App;
