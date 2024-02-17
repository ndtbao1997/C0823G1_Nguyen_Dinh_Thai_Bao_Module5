import {GET_HOME} from "./type";
import {homeService} from "../../service/homeService";

export const getHome = (page = 0) => {
    return async (dispatch) => {
        try{
            const res = await homeService.findAll(page);
            dispatch({
                type: GET_HOME,
                payload: res.data
            })
        }catch (err){
            console.log(err)
        }
    }
}