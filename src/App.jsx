import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/RoutesPage";
import { store } from "./Store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="font-display">
          <RoutesPage />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
