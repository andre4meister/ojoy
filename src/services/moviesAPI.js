import axiosInstance from './axios';

export class MoviesApi {
  static async getMovieById(id) {
    try {
      const response = await axiosInstance.get(`movies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getMovies(filters) {
    try {
      const response = await axiosInstance.get(`movies`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createMovie(body) {
    try {
      const response = await axiosInstance.post('movies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateMovie(body) {
    try {
      const response = await axiosInstance.put('movies', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteMovie(id) {
    try {
      const response = await axiosInstance.delete(`movies/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
