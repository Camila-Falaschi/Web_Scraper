import "dotenv/config";
import connectToDatabase from "./Models/Connection.js";
import app from "./app.js";

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log("Connection with database generated an error:\r\n");
    console.error(error);
  });
