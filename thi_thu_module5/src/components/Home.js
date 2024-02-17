import React, {useEffect, useState} from "react";
import {baiHatService} from "../service/baiHatService";
import {trangThaiService} from "../service/trangThaiService";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

export function Home() {
    const [nhac, setNhac] = useState([]);
    const [trangThai, setTrangThai] = useState([]);
    const [show, setShow] = useState(false);
    const [bhUp, setBhUp] = useState({});
    const handleClose = () => setShow(false);
    const handleUpdate = async () => {
        await baiHatService.updateBaiHat(bhUp.id, 2);
        await fetchData();
        toast("Bạn đã công khai bài hát thành công!")
        setShow(false);
    }
    const handleShow = async (id) => {
        try {
            const response = await baiHatService.findById(id);
            const baiHat = response.data;
            console.log(baiHat);
            if (baiHat.trangThaiId === 2) {
                toast("Bài hát này đã công khai!");
            } else {
                setShow(true);
                setBhUp(baiHat);
            }
        } catch (error) {
            console.error("Lỗi khi lấy thông tin bài hát:", error);
        }
    };

    async function fetchData() {
        const nhacReq = await baiHatService.findAll();
        setNhac(nhacReq.data);
        const trangThaiReq = await trangThaiService.findAll();
        setTrangThai(trangThaiReq.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate(`/register`);
    }

    const [phatNhac,setPhatNhac] = useState({});
    const handlePhatNhac = async (id) => {
        const nhacReq1 = await baiHatService.findById(id);
        setPhatNhac(nhacReq1.data);
        console.log(nhacReq1.data)
    }
    const [search,setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = async () => {
        const searchList = await baiHatService.searchBaiHat(search);
        if (searchList.data.length === 0){
            toast("Không có bài hát nào được tìm thấy!!!");
        } else {
            setNhac(searchList.data);
            setSearch("");
        }
    }

    return (
        <div>
            <h1>Danh sách bài hát</h1>
            <button onClick={handleRegister}>Đăng kí bài hát</button>
            <h1>{phatNhac.tenBaiHat}</h1>
            <h3>{phatNhac.caSi}</h3>
            <button>Phát nhạc</button><br></br>
            <input type="text" name="search" onChange={handleChange}></input><button onClick={handleSearch}>Tìm kiếm</button>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên bài hát</th>
                    <th>Ca sĩ</th>
                    <th>Nhạc sĩ</th>
                    <th>Thời gian phát</th>
                    <th>Số lượt yêu thích</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {nhac.map((n, index) => (
                    <tr key={n.id} onClick={() => handlePhatNhac(n.id)}>
                        <td>{index + 1}</td>
                        <td>{n.tenBaiHat}</td>
                        <td>{n.caSi}</td>
                        <td>{n.nhacSi}</td>
                        <td>{n.thoiGianPhat}</td>
                        <td>{n.soLuot}</td>
                        <td>
                            {trangThai.filter((item) => item.id === n.trangThaiId).map((item) => item.ten)}
                        </td>
                        <td>
                            <Button variant="primary" onClick={() => handleShow(n.id)}>
                                Công khai
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn công khai bài hát "{bhUp.tenBaiHat}"</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Công khai
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    );
}