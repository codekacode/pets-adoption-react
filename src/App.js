import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import Initial from './screens/Initial';
import Steps from './components/Steps'
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Initial}/> */}
        <Route path="/" component={Steps}/>
      </Switch>
    </Router>
  );
}

export default App;
