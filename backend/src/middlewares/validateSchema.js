import { responseErrorJson } from "../libs/responseJson.js";

const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    responseErrorJson(res, {
      status: 400,
      message: error.issues.map((error) => error.message),
    });
    return;
  }
};

export default validateSchema;
