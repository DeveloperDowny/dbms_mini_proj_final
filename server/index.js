import express from "express"; // express is ready to use
import bodyParser from "body-parser"; // will allow post coming request bodies
import sign_inusersRoutes from "./routes/sign_in.js";
import sign_upusersRoutes from "./routes/sign_up.js";
import crtRouter from "./routes/sign_up.js";
import transactionRouter from "./routes/transaction.js";

import transactionHistory from "./routes/trans_history.js";

import { login } from "./controllers/index.js";
import mRoutes from "./routes/mRoutes.js";
import multer from "multer";

const app = express(); // initialise express application all depended on the variable app
const upload = multer();
const PORT = 5000; //

app.use(bodyParser.json()); // initialise body parser middleware // gone be using json data

// app.use("/sign_in", sign_inusersRoutes);
// app.use("/", () => {
//   return "test";
// });
//app.use("/sign_up", sign_upusersRoutes);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(upload.array());
app.use("/sign_up", sign_upusersRoutes);
app.use("/sign_in", sign_inusersRoutes);
app.use("/transfer", transactionRouter);
app.use("/transactions");
// app.use("/transaction", transactionRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });
//   return;
// });

// export const logIn = (formData) => API.post("/account/login", formData);
// export const signUp = (formData) => API.post("/account/signup", formData);
// export const transfer = (formData) => API.post("/transfer", formData);
// export const transactions = (formData) => API.get("/transactions", formData);

app.use("/", mRoutes);

app.listen(PORT, () =>
  console.log(`Server Running on port : http://localhost:${PORT}`)
); //

//nodemon installation

/*app.get('/',(req,res) => {
console.log('[TEST]');// caught it from here 

res.send('Hello,from home page.') 
} ) */

/*app.get('/',(req,res) => {
 res.send('Hello,from home page.') 
} );*/
