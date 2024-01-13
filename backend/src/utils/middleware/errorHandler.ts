import express from "express";

const errorHandler = async (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        return res.status(err?.statusCode || 500).send({
            success: false,
            message: err.message || "Error From Error Handler.",
        });
    } catch (error) {
        console.error("Error fetching job data:", error);
        return res.status(500).json({
            success: false,
            message: "Failed.",
        });
    };
};

export default errorHandler;