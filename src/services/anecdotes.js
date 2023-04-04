import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const upvote = async (id, obj) => {
  const object = { ...obj, votes: obj.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, object)
  return response.data
}

const anecdoteService = {
  getAll,
  createNew,
  upvote,
}

export default anecdoteService
