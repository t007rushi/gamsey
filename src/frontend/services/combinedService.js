import axios from "axios";
import { toast } from "react-toastify";

export const getService = async (category, method, token, video) => {
  try {
    switch (method) {
      case "get": {
        const { data } = await axios[method](`/api/user/${category}`, {
          headers: {
            authorization: token,
          },
        });
        toast.success(`video is here`);
        return data;
      }
      case "post": {
        const { data } = await axios[method](
          `/api/user/${category}`,
          { video },
          {
            headers: {
              authorization: token,
            },
          }
        );
        toast.success(`video Added to ${category}`);
        return data;
      }
      case "delete": {
        const { data } = await axios[method](
          `/api/user/${category}/${video._id}`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        toast.success(`video removed from ${category}`);
        return data;
      }
      default:
        return;
    }
  } catch (err) {
    console.log(err.message);
    toast.error("Error Occured");
  }
};
