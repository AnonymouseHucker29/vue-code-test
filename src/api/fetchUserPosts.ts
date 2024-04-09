const fetchUserPosts = async () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1'

  try {
    return await fetch(API_URL).then((response) => response.json())
  } catch (error) {
    console.log(error)
  }
}

export default fetchUserPosts
