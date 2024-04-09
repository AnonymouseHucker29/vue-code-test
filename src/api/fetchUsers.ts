const fetchUsers = async () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  try {
    return await fetch(API_URL).then((response) => response.json())
  } catch (error) {
    console.log(error)
  }
}

export default fetchUsers
