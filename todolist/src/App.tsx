import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./AppRouter";

import "./css/App.css";
import TaskProvider from "./context/TaskProvider";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Router>
          <AppRouter />
        </Router>
      </TaskProvider>
    </div>
  );
}

export default App;
