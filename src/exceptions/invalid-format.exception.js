const CustomException = require('./custom.exception');

class InvalidFormatException extends CustomException {
  constructor(message) {
    super(422, message ?? 'Invalid format');
  }
}

module.exports = InvalidFormatException;
