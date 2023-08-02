import {
  BACKGROUND_COLOR_TYPES,
  TEXT_COLOR_TYPES,
} from "../../utils/constants.js";
import { Button, Card } from "../ui/index.js";

const TaskCard = ({ task }) => {
  return (
    <Card>
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p className="text-slate-300">{task.description}</p>
        <p>
          {task.deadline &&
            new Date(task.deadline).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
        <p
          className={
            "font-bold " +
            (task.done ? TEXT_COLOR_TYPES.primary : TEXT_COLOR_TYPES.warning)
          }
        >
          {task.done ? "Done" : "Pendient"}
        </p>
      </div>

      <div className="flex gap-x-2 items-center mt-4">
        <Button
          type={BACKGROUND_COLOR_TYPES.primary}
          onClick={() => console.log(`Edit ${task._id}`)}
        >
          Edit
        </Button>
        <Button
          type={BACKGROUND_COLOR_TYPES.danger}
          onClick={() => console.log(`Delete ${task._id}`)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
