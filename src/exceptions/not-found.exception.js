const CustomException = require('./custom.exception');

class NotFoundException extends CustomException {
  constructor(message) {
    super(404, message ?? 'Resource not found');
  }
}

module.exports = NotFoundException;
