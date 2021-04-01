import './App.css';
import Header from './Components/Header';
import Info from './Components/Info';
import AddCommentary from './Components/Commentary';
import ListComments from './Components/ListComents';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
      <div>
          <Header/>
          <Info/>
          <AddCommentary/>
          <ListComments />
      </div>
  );
}

export default App;
