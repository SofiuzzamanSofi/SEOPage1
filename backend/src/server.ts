import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDb from "./utils/lib/mongodb";
import colors from 'colors';
import errorHandler from "./utils/middleware/errorHandler";
import route from "./route/v1/index"

// initialized the app and port
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connect 
try {
    connectDb();
} catch (error) {
    console.log("Could not connect to Mongoose: ", error);
};

//routes
app.use("/api/v1", route());

//home || testing route 
app.get("/", (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to the prayer-todo-server",
        data: "Dummy Data text",
    });
});

// if no route found 
app.all("*", (req, res) => {
    res.status(404).send("NO ROUTE FOUND.");
});

//global error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(colors.bgCyan(`to-do server listening on port: ${port}`))
});