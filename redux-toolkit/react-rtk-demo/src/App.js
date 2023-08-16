import CakeView from "./feature/cake/CakeView";
import IcecreamView from "./feature/icecram/IcecreamView";
import UserList from "./feature/user/UserList";
import './App.css';

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserList />
    </div>
  );
}

export default App;
