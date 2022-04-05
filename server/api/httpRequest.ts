import { useBody, useCookies, useQuery } from 'h3'

export default async (req, res) => {
  const query = useQuery(req)
  const body = await useBody(req) // only for POST request
  const cookies = useCookies(req)
  
  return { query, body, cookies }
}