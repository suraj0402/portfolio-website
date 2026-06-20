import api from "./axiosConfig";


// const API_URL = "http://localhost:8080/projects";
const API_URL =
  "https://portfolio-backend-8bsg.onrender.com/projects";

// const getAuthHeader = () => ({
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
// });

// export const getProjects = () => {
//   return axios.get(API_URL);
// };

// export const getProjects = (page = 0, size = 5) => {
//   return axios.get(`${API_URL}?page=${page}&size=${size}`);
// };

export const getProjects = (page = 0, size = 5) => {
  return api.get(
      `${API_URL}?page=${page}&size=${size}`
  );
};

// export const getProjectById = (id) => {
//   return axios.get(`${API_URL}/${id}`);
// };

export const getProjectById = (id) => {
  return api.get(
      `${API_URL}/${id}`
  );
};

// export const createProject = (project) => {
//   return axios.post(API_URL, project);
// };

export const createProject = (project) => {
  return api.post(
      API_URL,
      project
  );
};

// export const updateProject = (id, project) => {
//   return axios.put(`${API_URL}/${id}`, project);
// };

export const updateProject = (id, project) => {
  return api.put(
      `${API_URL}/${id}`,
      project
  );
};

// export const deleteProject = (id) => {
//   return axios.delete(`${API_URL}/${id}`);
// };

export const deleteProject = (id) => {
  return api.delete(
      `${API_URL}/${id}`
  );
};

export const getStats = () => {
    return api.get(`${API_URL}/stats`);
};

export const getFeaturedProjects = () => {
    return api.get(`${API_URL}/featured`);
};

// export const uploadImage = (file) => {

//     const formData = new FormData();

//     formData.append("file", file);

//     return axios.post(
//         "http://localhost:8080/upload",
//         formData,
//         {
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             }
//         }
//     );
// };

export const uploadImage = (file) => {

    const formData = new FormData();

    formData.append("file", file);

    return api.post(
        "https://portfolio-backend-8bsg.onrender.com/upload",
        formData,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            }
        }
    );
};