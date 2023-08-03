import { useEffect } from "react";

import TaskCard from "../../components/Tasks/TaskCard.jsx";
import { ButtonLink, Header } from "../../components/ui/index.js";
import useTasks from "../../hooks/useTasks.js";
import { BACKGROUND_COLOR_TYPES } from "../../utils/constants.js";
import { routes, url } from "../../utils/routes.js";

const TasksIndex = () => {
  const { tasks, errors, getAllTasks } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Header>My tasks</Header>

        <ButtonLink
          type={BACKGROUND_COLOR_TYPES.success}
          to={url(routes.tasks.create)}
        >
          New
        </ButtonLink>
      </div>

      {errors.length > 0 && (
        <div className="bg-red-500 p-2 rounded-md mb-6">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <h1 className="font-bold text-xl">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-md:grid-cols-1">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </>
  );
};

export default TasksIndex;
