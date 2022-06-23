import axios from "axios";
import { toast } from "react-toastify";

//LOGIN
export const logInHandlerService = async (email, pass) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: pass,
    });
    return res;
  } catch (error) {
    console.error(error);
    toast.error("Invalid email or password");
  }
};
