import pigService from "../../service/PigService";
import { GET_PIGS } from "./action";

export const getPigs = async (dispatch) => {
  try {
    const res = await pigService.findAll();
    dispatch({
      type: GET_PIGS,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};
