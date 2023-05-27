import axiosInstance from './axios';

export class SerialsApi {
  static async getSerialById(id) {
    try {
      const response = await axiosInstance.get(`api-serials/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getSerials(filters) {
    try {
      const response = await axiosInstance.get(`api-serials`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createSerial(body) {
    try {
      const response = await axiosInstance.post('api-serials', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateSerial(body) {
    try {
      const response = await axiosInstance.put('api-serials', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteSerial(id) {
    try {
      const response = await axiosInstance.delete(`api-serials/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
