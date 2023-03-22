import axios from "axios";
import { baseUrl } from "../utils/constants";

const headersList = {
  Accept: "*/*",
  "Content-Type": "application/json"
};

export async function fetchAllJobs() {
  try {
    const response = await axios.request({
      url: `${baseUrl}/job`,
      method: "GET",
      headers: headersList
    });
    return {
      error: false,
      data: response.data
    };
  } catch (error) {
    console.error("error", error);
    return {
      error: true,
      data: null
    };
  }
}

export async function createNewJob(data) {
  const bodyContent = JSON.stringify(data);
  try {
    const response = await axios.request({
      url: `${baseUrl}/job`,
      method: "POST",
      headers: headersList,
      data: bodyContent
    });
    return response.data();
  } catch (error) {
    console.error("error", error);
    return {
      error: true
    };
  }
}
