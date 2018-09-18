import jwt from 'jsonwebtoken'

const JWT_SECRET = "hello world"

const JWT_OPTION = {
  issuer: "InStore"
};

const createToken = (user) => {
  if (!user && !user._id) {
    return null
  }
  return jwt.sign({
    id: user._id
  }, JWT_SECRET, JWT_OPTION)
}

const verifyToken = (token) => {
  console.log(token, "=======================", JWT_SECRET);
  return jwt.verify(token, JWT_SECRET. JWT_OPTION)
}

const getTokenFromHeaders = req => {
  const token = req.headers.authorization

  if (token) {
    const [bearer, ...newToken] = token.split(' ')
    if (bearer === 'Bearer' && newToken[0]) {
      try {
        console.log('cccccccc')
        return verifyToken(newToken[0])
      } catch (error) {
        console.log(error)
        return null
      }
    }
  }
  return null
}

export const AuthServices = {
  createToken,
  verifyToken,
  getTokenFromHeaders
}
