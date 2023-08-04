import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./utils/store.js";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import TasksCreate from "./pages/Tasks/Create.jsx";
import TasksEdit from "./pages/Tasks/Edit.jsx";
import TasksIndex from "./pages/Tasks/Index.jsx";
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

            <Route element={<ProtectedRoute />}>
              <Route path={url(routes.home)} element={<Home />} />
              <Route path={url(routes.tasks.index)} element={<TasksIndex />} />
              <Route
                path={url(routes.tasks.create)}
                element={<TasksCreate />}
              />
              <Route path={url(routes.tasks.edit)} element={<TasksEdit />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
