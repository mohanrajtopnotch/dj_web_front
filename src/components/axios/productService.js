import axios from 'axios';
import {API_URL} from '../constants';

export const createProduct = async (req,res) => {
  let data= {
    title:req.body.title,
    descriptions:req.body.descriptions,
    rating:'0',
  }
  let file =new FormData();
  file.append(req.body.file);
  try {
    const response = await axios.post(`${API_URL}/dj/createProduct`, file ,data, {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const readProduct= async () => {
  try {
    const response = await axios.get(
      `${API_URL}/dj/getProduct`,
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

export const updateProduct = async (req,res) => {
  let data = req.body.rating
  try {
    const response = await axios.post(`${API_URL}/dj/updateProduct`,data , {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};


