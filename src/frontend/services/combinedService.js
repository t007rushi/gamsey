import axios from "axios";

export const getService = async (category, method, token, video) => {

  try {
    switch (method) {
      case "get": {
        const { data } = await axios[method](`/api/user/${category}`, {
          headers: {
            authorization: token,
          },
        });
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
        return data;
      }
      case "delete": {
        const { data } = await axios[method](`/api/user/${category}/${video._id}`, {
          headers: {
            authorization: token,
          },
        });
        return data;
      }
      default:
        return;
    }
  } catch (err) {
    console.log(err.message);
  }
};
