import axios from 'axios';
import {API_URL} from '../constants';

export const registerUser = async (req,res) => {
  let data = {
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
  }
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
  let data = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
  }
  try {
    const response = await axios.post(
      `${API_URL}/dj/login`,data,
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
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

