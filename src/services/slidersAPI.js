import axiosInstance from './axios';

export class SlidersApi {
  static async getSliderById(id) {
    try {
      const response = await axiosInstance.get(`sliders/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getSliders(filters) {
    try {
      const response = await axiosInstance.get(`sliders`);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async createSlider(body) {
    try {
      const response = await axiosInstance.post('sliders', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async updateSlider(body) {
    try {
      const response = await axiosInstance.put('sliders', body);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async deleteSlider(id) {
    try {
      const response = await axiosInstance.delete(`sliders/${id}`);
      return response;
    } catch (e) {
      return e;
    }
  }
}
