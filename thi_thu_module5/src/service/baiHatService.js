import req from "../http-common.js"
const findAll = async () => {
    return req.get('/nhac');
};

const findById = async (id) => {
    return req.get(`nhac/${id}`)
}

const updateBaiHat = async (id,trangThai) => {
    req.patch(`nhac/${id}`, {trangThaiId: trangThai});
}

const addBaiHat = async (baiHat) => {
    req.post(`nhac`,baiHat);
}

const searchBaiHat = async (value) => {
    return req.get(`nhac?tenBaiHat_like=${value}`);
}
export const baiHatService = {
    findAll,
    findById,
    updateBaiHat,
    addBaiHat,
    searchBaiHat
}