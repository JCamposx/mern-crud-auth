export const routes = {
  api: {
    auth: {
      register: "/auth/register",
      login: "/auth/login",
      logout: "/auth/logout",
      verifyToken: "/auth/verify-token",
    },
    tasks: {
      index: "/tasks",
      store: "/tasks/store",
      delete: "/tasks/:id",
    },
  },
  register: "/register",
  login: "/login",
  home: "/",
  tasks: {
    index: "/tasks",
    create: "/tasks/create",
  },
};

export const url = (route, params = null) => {
  if (!params) {
    return route;
  }

  return route.replace(
    /:\w+/g,
    (paramName) => params[paramName.substring(1)] || paramName
  );
};
