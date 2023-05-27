import axiosInstance from './axios';

export class SlidersApi {
  static async getSliderById(id) {
    try {
      const response = await axiosInstance.get(`api-sliders/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getSliders(filters) {
    try {
      const response = await axiosInstance.get(`api-sliders`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createSlider(body) {
    try {
      const response = await axiosInstance.post('api-sliders', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateSlider(body) {
    try {
      const response = await axiosInstance.put('api-sliders', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteSlider(id) {
    try {
      const response = await axiosInstance.delete(`api-sliders/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
