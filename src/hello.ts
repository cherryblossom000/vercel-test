import 'node-fetch'
import type {VercelRequest, VercelResponse} from '@vercel/node'

export default async (
  request: VercelRequest,
  response: VercelResponse
): Promise<void> => {
  const {name = 'World'} = request.query
  response.status(200).send(`Hello1 ${name}!`)
}
