async function authMiddleWare(req, res, next) {
  const user = req.session.user;
  const isAuth = req.session.isAuthenticated;

  if (!user || !isAuth) {
    return next();
  }

  res.locals.isAuth = isAuth;

  next();
}

module.exports = { authMiddleWare: authMiddleWare };
