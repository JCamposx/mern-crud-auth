import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./utils/store.js";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import { routes, url } from "./utils/routes.js";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path={url(routes.register)} element={<Register />} />
            <Route path={url(routes.login)} element={<Login />} />
            <Route path={url(routes.home)} element={<h1>Home page</h1>} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
