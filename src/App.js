import { store } from "./redux/store";
import { Provider } from "react-redux";
import PostList from "./component/PostList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
