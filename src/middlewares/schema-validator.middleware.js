const schemaValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

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
