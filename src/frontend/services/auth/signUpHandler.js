import axios from "axios";

//SIGNUP
export const signUpHandlerService = async ( first, last, email, pass ) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      firstName: first,
      lastName: last,
      email: email,
      password: pass,
    });
    return data
  } catch (error) {
    console.log(error);
  }
};
