import {
  responseErrorJson,
  responseSuccessJson,
} from "../libs/responseJson.js";
import Task from "../models/task.model.js";

export const index = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  });

  responseSuccessJson(res, {
    tasks,
  });
};

export const show = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    responseErrorJson(res, {
      status: 404,
      message: "Task not found",
    });
    return;
  }

  if (task.user.toString() !== req.user.id) {
    responseErrorJson(res, {
      status: 403,
      message: "This is not your task",
    });
    return;
  }

  responseSuccessJson(res, {
    task,
  });
};

export const store = async (req, res) => {
  const { title, description, deadline, done } = req.body;

  const task = new Task({
    title,
    description,
    deadline,
    done,
    user: req.user.id,
  });

  task.save();

  responseSuccessJson(res, {
    task,
  });
};

export const update = async (req, res) => {
  const { title, description, deadline, done } = req.body;

  const taskFound = await Task.findById(req.params.id);

  if (!taskFound) {
    responseErrorJson(res, {
      status: 404,
      message: "Task not found",
    });
  }

  if (taskFound.user.toString() !== req.user.id) {
    responseErrorJson(res, {
      status: 403,
      message: "This is not your task",
    });
    return;
  }

  const task = await taskFound.updateOne(
    { id: req.params.id },
    {
      title,
      description,
      deadline,
      done,
    },
    {
      new: true,
    }
  );

  responseSuccessJson(res, {
    task,
  });
};

export const remove = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    responseErrorJson(res, {
      status: 404,
      message: "Task not found",
    });
    return;
  }

  res.sendStatus(204);
};
