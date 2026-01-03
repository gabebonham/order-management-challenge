import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = async (rawPassword: string): Promise<string> => {
  return bcrypt.hash(rawPassword, SALT_ROUNDS)
}

export const verifyPassword = async (
  rawPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(rawPassword, hashedPassword)
}
