import Homepage from "./components/Homepage/Homepage"
import { Route } from 'react-router-dom'
import SpringOverlay from "./components/Welcome/SpringOverlay";

function App() {
  return (
    <>
    <Route path='/' exact component={SpringOverlay} />
    <Route path='/home'exact component={Homepage} />
    </>
  );
}

export default App;
