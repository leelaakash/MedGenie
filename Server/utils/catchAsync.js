// Utility wrapper to handle async errors in Express controllers
// Prevents repetitive try-catch blocks in route handlers
module.exports = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };