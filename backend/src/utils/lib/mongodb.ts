import mongoose from "mongoose";
import colors from "colors";

const { MONGOODB_URI } = process.env;
if (!MONGOODB_URI) {
    throw new Error("MONGOODB_URI is required");
};
const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(MONGOODB_URI);
        if (connection.readyState === 1) {
            console.log(colors.bgBlue("DB connection is established/ON."));
            return Promise?.resolve;
        }
    } catch (error) {
        Promise?.resolve(error);
        //  console.log("MONGODB CONNECTED CATCH-ERROR:", error);
    };
};

export default connectDb;