import req from "../http-common.js"
const findAll = async () => {
    return req.get('/trangThai');
};
export const trangThaiService = {
    findAll
}