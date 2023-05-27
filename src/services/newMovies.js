import axiosInstance from './axios';

export class NewMoviesApi {
  static async getNewMovieById(id) {
    try {
      const response = await axiosInstance.get(`api-newMovies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getNewMovies(filters) {
    try {
      const response = await axiosInstance.get(`api-newMovies`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createNewMovie(body) {
    try {
      const response = await axiosInstance.post('api-newMovies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateNewMovie(body) {
    try {
      const response = await axiosInstance.put('api-newMovies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteNewMovie(id) {
    try {
      const response = await axiosInstance.delete(`api-newMovies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
