import axios from "axios";

export default {
  async executeAPI(params, status) {
    try {
      const res = await axios(params, status);
      if (res.statusText !== status) {
        throw { error: res };
      }
      return res;
    } catch (err) {
      throw "Error";
    }
  },
  async postAPI(url, params, status) {
    try {
      const res = await axios.post(url, params);
      if (res.statusText !== status) {
        throw { error: res };
      }
      return res;
    } catch (err) {
      throw "Error";
    }
  },
  async getAPI(url, status) {
    try {
      const res = await axios.get(url);
      if (res.statusText !== status) {
        throw { error: res };
      }
      return res.data;
    } catch (err) {
      throw "Error";
    }
  },
  async putAPI(url, params, status) {
    try {
      const res = await axios.put(url, params);
      if (res.statusText !== status) {
        throw { error: res };
      }
      return res;
    } catch (err) {
      throw "Error";
    }
  },
};
