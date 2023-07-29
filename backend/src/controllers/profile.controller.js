import { returnSuccessJson } from "../libs/responseJson.js";
import User from "../models/user.model.js";

export const index = async (req, res) => {
  const user = await User.findById(req.user.id);

  returnSuccessJson(res, {
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
};
