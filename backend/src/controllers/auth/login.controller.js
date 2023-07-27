import bcrypt from "bcryptjs";

import { createAccessToken } from "../../libs/jwt.js";
import User from "../../models/user.model.js";

const login = async (req, res) => {
  const loginUser = async () => {
    const { email, password } = req.body;

    const user = await findUser(email);

    await verifyPasswordsMatch(password, user.password);

    const token = await createAccessToken({ id: user._id });

    res.cookie("token", token);

    res.json({
      success: true,
      items: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          token,
        },
      },
    });
  };

  const findUser = async (email) => {
    const user = await User.findOne({ email });

    if (user) {
      return user;
    }

    throw {
      status: 400,
      message: "User not found",
    };
  };

  const verifyPasswordsMatch = async (requestPassword, userPassword) => {
    const passwordsMatch = await bcrypt.compare(requestPassword, userPassword);

    if (passwordsMatch) {
      return;
    }

    throw {
      status: 400,
      message: "Incorrect password",
    };
  };

  try {
    await loginUser();
  } catch (error) {
    const errorStatus = error.status ?? 500;

    res.status(errorStatus).json({
      success: false,
      items: {
        error: error.message,
      },
    });
  }
};

export default login;
