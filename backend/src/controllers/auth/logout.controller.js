const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  res.json({
    success: true,
  });
};

export default logout;
