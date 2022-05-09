import jwt from 'jsonwebtoken'
import prisma from './prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export const validateRoute = handler => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN
    let user = null

    if (token) {
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as {
          id: number
        }
        user = await prisma.user.findUnique({ where: { id } })
        if (!user) {
          res.status(401).json({ message: 'Invalid token' })
          return
        }
      } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
        return
      }
      return handler(req, res, user)
    } else {
      res.status(401).json({ message: 'No token' })
      return
    }
  }
}

export const validateToken = token => {
  const user = jwt.verify(token, process.env.JWT_SECRET)
  return user
}
