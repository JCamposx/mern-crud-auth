import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./utils/store.js";

import Register from "./pages/auth/Register.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
