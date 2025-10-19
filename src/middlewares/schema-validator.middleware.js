const schemaValidator = (schema, source = 'body') => {
  return (req, res, next) => {
    const dataToValidate = source === 'query' ? req.query : req.body;

    const { error } = schema.validate(dataToValidate);

    if (error) {
      res.status(400).json({
        error: error.details[0].message,
      });

      return;
    }

    next();
  };
};

module.exports = schemaValidator;
