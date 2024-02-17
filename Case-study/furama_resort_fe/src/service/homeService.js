import request from "../http_common";
const findAll = async (page) => {
    return request.get(`/home?page=${page}`);
}

export const homeService = {
    findAll
}