export const returnSuccessJson = (res, data) => {
  res.json({
    success: true,
    items: {
      ...data,
    },
  });
};

export const returnErrorJson = (res, error) => {
  const errorStatus = error.status ?? 500;

  res.status(errorStatus).json({
    success: false,
    items: {
      error: error.message,
    },
  });
};
