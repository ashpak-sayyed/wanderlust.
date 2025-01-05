
// insted of using try and catch again & again thats why we use wrapAsync.
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
