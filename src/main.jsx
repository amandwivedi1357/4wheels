import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter>
  <ChakraProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </ChakraProvider>
      </BrowserRouter>
);
