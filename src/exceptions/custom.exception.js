class CustomException extends Error {
  statusCode;

  constructor(statusCode, message) {
    super(message ?? 'Internal server error');
    this.statusCode = statusCode ?? 500;
  }
}

module.exports = CustomException;
