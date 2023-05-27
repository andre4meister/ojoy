import axiosInstance from './axios';

export class MoviesApi {
  static async getMovieById(id) {
    try {
      const response = await axiosInstance.get(`api-movies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getMovies(filters) {
    try {
      const response = await axiosInstance.get(`api-movies`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createMovie(body) {
    try {
      const response = await axiosInstance.post('api-movies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateMovie(body) {
    try {
      const response = await axiosInstance.put('api-movies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteMovie(id) {
    try {
      const response = await axiosInstance.delete(`api-movies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
