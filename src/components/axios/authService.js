import axios from 'axios';
import {API_URL} from '../constants';

export const registerUser = async (req,res) => {

  let data = req;
  try {
    const response = await axios.post(`${API_URL}/dj/register`, data, {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const loginUser= async (req,res) => {
  let data = req
  try {
    const response = await axios.post(
      `${API_URL}/dj/login`,data,
      {
        withCredentials: true,
      },
    );
    alert(response)
    console.log(response.data);
    localStorage.setItem(response.data)
    return response.data;
  } catch (err) {
    alert(err);
    console.log(err);
    return err;
  }
};

export const seesionChecking = async (req,res) => {
  let data = req.body.token
  try {
    const response = await axios.get(`${API_URL}/dj/checkAuth`, data , {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

