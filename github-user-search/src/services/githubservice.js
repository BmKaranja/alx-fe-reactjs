// services/githubService.js
import axios from "axios";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // return user object
  } catch {
    throw new Error("User not found");
  }
}
