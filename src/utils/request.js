import axios from 'axios';
import appConfig from '@/configs/app';

const myAxios = axios.create({
  baseURL: appConfig.serverBase,
  timeout: 10000,
});

const request = async (config) => {
  try {
    const { data, status } = await myAxios(config);
    if (status !== 200) {
      throw new Error(`server error, status: ${status}`);
    }
    if (!data) {
      throw new Error('server error, response empty');
    }
    if (data.code !== 200) {
      throw new Error(`server error, code: ${data.code}, message: ${data.msg}`);
    }
    return data.data;
  } catch (error) {
    throw error;
  }
};

export default request;
