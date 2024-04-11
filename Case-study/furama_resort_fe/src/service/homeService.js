import request from "../http_common";
const findAll = async (page) => {
    return request.get(`/home?page=${page}`);
}
const findById = async (id) => {
    return request.get(`/home/${id}`);
}

const deleteById = async (id) => {
    return request.delete(`home/${id}`);
}

export const homeService = {
    findAll,
    findById,
    deleteById
}