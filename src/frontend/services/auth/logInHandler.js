import axios from "axios";

//LOGIN
export const logInHandlerService = async (email, pass) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: pass,
    });
    return res;
  } catch (error) {
    console.error("Invalid email or password", error);
  }
};
