import { app, PORT } from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
