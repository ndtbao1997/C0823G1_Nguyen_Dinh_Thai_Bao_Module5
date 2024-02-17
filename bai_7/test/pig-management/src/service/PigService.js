import request from "../http-common";

const findAll = async () => {
  try {
    const res = await request.get("/pigs");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const pigService = {
  findAll,
};

export default pigService;
