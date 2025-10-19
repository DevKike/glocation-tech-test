const CustomException = require('./custom.exception');

class BadRequestException extends CustomException {
  constructor(message) {
    super(400, 'Bad request');
  }
}

module.exports = BadRequestException;
