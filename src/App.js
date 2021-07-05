import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Initial from './screens/Initial';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Categories from './screens/Categories'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Initial}/>
        <Route path="/step1" component={Step1}/>
        <Route path="/step2" component={Step2}/>
        <Route path="/categories" component={Categories}/>
      </Switch>
    </Router>
  );
}

export default App;
