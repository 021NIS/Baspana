import { StackNavigator } from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';
import PropertyView from './src/PropertyView';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Property: { screen: PropertyView }
});

export default App;
