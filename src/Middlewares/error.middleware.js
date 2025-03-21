const errorMiddleware = (err, req, res, next) => {
    console.error("❌ Error:", err.message);

    res.status(err.status || 500).json({
        message: err.message || "Error interno del servidor",
    });
};

export default errorMiddleware;
