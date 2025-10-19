const CustomException = require('../exceptions/custom.exception');

const responseManager = async (expressRes, promise, statusCode, message) => {
  try {
    const result = await promise;

    expressRes.status(statusCode).json({
      message,
      data: result,
    });
  } catch (error) {
    handleError(expressRes, error);
  }
};

const handleError = (expressRes, error) => {
  if (error instanceof CustomException) {
    expressRes.status(error.statusCode).json({
      message: error.message,
    });

    return;
  }

  expressRes.status(500).json({
    message: `Internal server error: ${error.message}`,
  });
};

module.exports = responseManager;
