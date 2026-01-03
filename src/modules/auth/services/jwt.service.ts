import jwt from 'jsonwebtoken'

export interface JwtPayload {
  sub: string
}

export const generateToken = (
  payload: JwtPayload,
): { token: string; expIn: number } => {
  const JWT_SECRET = process.env.JWT_SECRET!
  const expIn = 60 * 60 * 24 * 7
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: expIn,
  })
  return { token, expIn }
}

export const verifyToken = (token: string): JwtPayload => {
  const JWT_SECRET = process.env.JWT_SECRET!
  return jwt.verify(token, JWT_SECRET) as JwtPayload
}
