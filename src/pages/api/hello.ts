// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next'

type Data = {
  name: string
}

export const config = {
  runtime: 'edge'
}

export default async function handler(
  req: NextApiRequest,
) {
  return Response.json({ name: 'John Doe' })
}
