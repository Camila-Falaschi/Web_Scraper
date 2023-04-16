const errors = [
  { status: 400, message: "Invalid empty fields" },
  { status: 404, message: "Products not found" },
];

/**
 * This function captures the errors inside the application's 
 * backend and returns a standard response with the type of 
 * error that occurred.
 * @param {Error} error 
 * @param {Request} _req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const errorHandler = (error, _req, res, next) => {
  const errorStatus =
    errors.find((err) => err.message === error.message).status || 500;
  res.status(errorStatus).json({ message: error.message });
  next();
};

export default errorHandler;
