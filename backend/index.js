import Express from "express";
import colors from "colors";
import userRoutes from "./routes/users.js";
const app = Express();

app.use("/api/users", userRoutes);
app.listen(8800, () => {
  console.log(colors.cyan("The server is running"));
});
