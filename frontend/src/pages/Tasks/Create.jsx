import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Button, Header, Switcher } from "../../components/ui/index.js";
import useTasks from "../../hooks/useTasks.js";
import { BACKGROUND_COLOR_TYPES } from "../../utils/constants.js";
import { routes, url } from "../../utils/routes.js";

const TasksCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { storeTask, errors: storeTaskErrors } = useTasks();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const hadSuccess = await storeTask(data);

    if (hadSuccess) {
      navigate(url(routes.tasks.index));
    }
  });

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Header>New task</Header>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-zinc-800 w-96 max-w-md p-10 rounded-md">
          {storeTaskErrors.length > 0 && (
            <div className="bg-red-500 p-2 rounded-md mb-4">
              {storeTaskErrors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <form>
            <input
              type="text"
              placeholder="Title"
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-1"
              {...register("title", { required: true })}
              autoFocus
            />
            {errors.title && <p className="text-red-500">Title is required</p>}

            <textarea
              rows="3"
              placeholder="Description"
              {...register("description", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">Description is required</p>
            )}

            <div className="flex justify-between items-center mt-4 mb-5">
              <input
                type="date"
                placeholder="Deadline"
                className="bg-zinc-700 text-white px-4 py-2 rounded-md"
                {...register("deadline")}
                autoFocus
              />

              <Switcher name="done" register={register}>
                Done
              </Switcher>
            </div>

            <Button type={BACKGROUND_COLOR_TYPES.primary} onClick={onSubmit}>
              Save
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TasksCreate;
