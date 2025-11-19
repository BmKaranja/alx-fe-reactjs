import axios from "axios";

export async function fetchUserData(username, location) {
  if (location) {
    // Use search API if location is provided
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}+location:${location}`
    );
    // Return the first matching user
    return response.data.items[0];
  } else {
    // Default: fetch by username
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
}
