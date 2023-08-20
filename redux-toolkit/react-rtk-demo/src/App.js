import CakeView from "./feature/cake/CakeView";
import IcecreamView from "./feature/icecram/IcecreamView";
import UserList from "./feature/user/UserList";
import './App.css';
import Task from "./todoList/Task";
import TaskList from "./todoList/TaskList";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserList />
      <hr />
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
