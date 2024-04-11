import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRipple,
    MDBBtn
} from 'mdb-react-ui-kit';
import {MDBPagination, MDBPaginationItem, MDBPaginationLink} from 'mdb-react-ui-kit';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import Footer from "./Footer";
import {getHome, getHomeById} from "../redux/action/home";
import {deleteVillaById} from "../redux/action/villa";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDelete = async () => {
        try {
            await dispatch(deleteHomeById(homeById.id));
            toast(`Bạn đã xóa thành công dịch vụ ${homeById.serviceName}!!!`)
            fetchData();
        } catch (err) {
            toast("Đã xảy ra lỗi trong quá trình xử lý!!!")
            fetchData();
        }
        setShow(false);
    }
    const handleShow = async (id) => {
        await dispatch(getHomeById(id));
        setShow(true)
    };
    const homeById = useSelector(state => state.homeById);
    const home = useSelector(state => state.home);
    const [totalPage, number] = useSelector(state => state.totalPagesHome)
    const dispatch = useDispatch();
    const [topRightModal, setTopRightModal] = useState(false);
    const [homeModal, setHomeModal] = useState({});
    const paginationItems = [];
    for (let i = 0; i < totalPage; i++) {
        if (i === number) {
            paginationItems.push(
                <MDBPaginationItem key={i+1} className='page-item active' aria-current='page'>
                    <MDBPaginationLink tag='span' className='page-link' onClick={() => dispatch(getHome(i))}>
                        {i+1}<span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
            );
        } else {
            paginationItems.push(
                <MDBPaginationItem key={i+1}>
                    <MDBPaginationLink href='#' onClick={() => dispatch(getHome(i))}>{i+1}</MDBPaginationLink>
                </MDBPaginationItem>
            );
        }
    }


    const renderStar = (star) => {
        switch (star) {
            case "Ba sao":
                return <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                    className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i
                    className="fa-regular fa-star"></i></span>
            case "Bốn sao":
                return <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                    className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                    className="fa-regular fa-star"></i></span>
            case "Năm sao":
                return <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                    className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i></span>
            default:
                return null;
        }
    }
    const toggleOpen = (id) => {
        setTopRightModal(!topRightModal);
        const homeModal1 = home.find(v => v.id === id);
        setHomeModal(homeModal1);
    };

    const toggleClose = () => {
        setTopRightModal(!topRightModal);
    }
    const fetchData = () => dispatch(getHome());
    useEffect(() => {
       fetchData();
    }, []);
    return <div>
        <MDBContainer>
            <MDBRow>
                {home.map(h => (
                    <MDBCol className="col-md-4 mt-5" size='md' key={h.id}>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={h.photo} fluid alt='...'/>
                                <a>
                                    <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>{h.serviceName}</MDBCardTitle>
                                <MDBCardText>
                                    {h.description}
                                </MDBCardText>
                                <MDBCardTitle style={{color: "red"}}>Chí phí
                                    thuê: {h.rentalCost.toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })}/{h.rentalTypeName}</MDBCardTitle><br/>
                                <MDBBtn color='info'>Đặt lịch ngay</MDBBtn>
                                <MDBBtn style={{marginLeft: "20px"}} outline color='info'
                                        onClick={() => toggleOpen(h.id)}>
                                    Chi tiết
                                </MDBBtn>
                                <Button variant="primary" onClick={() => handleShow(h.id)}>
                                    Xóa
                                </Button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
            <MDBModal
                animationDirection='right'
                open={topRightModal}
                tabIndex='-1'
                setOpen={setTopRightModal}
            >
                <MDBModalDialog position='top-right' side>
                    <MDBModalContent>
                        <MDBModalHeader className='bg-info text-white'>
                            <MDBModalTitle>{homeModal.serviceName}</MDBModalTitle>
                            <MDBBtn
                                color='none'
                                className='btn-close btn-close-white'
                                onClick={toggleClose}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='row'>
                                <div className='col-5 text-center'>
                                    <MDBCardImage src={homeModal.photo} fluid alt='...'/>
                                    <MDBCardImage style={{width: "75%", marginTop: "20px"}}
                                                  src="https://d3nax9sawz4kbl.cloudfront.net/company_logos/e8519e0026f93e93a626c8744cdf0977.png"
                                                  fluid alt='...'/>
                                </div>

                                <div className='col-7'>
                                    <p>Loại dịch vụ: {homeModal.serviceTypeName}</p>
                                    <p>Số người tối đa: {homeModal.maxPeople}</p>
                                    <p>Số tầng: {homeModal.floor}</p>
                                    <p>Diện tích: {homeModal.area}</p>
                                    <p>Tiêu chuẩn: {renderStar(homeModal.standards)}</p>
                                    <p>Chi phí
                                        thuê: {homeModal.rentalCost ? homeModal.rentalCost.toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) : null}/{homeModal.rentalTypeName}</p>
                                </div>
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='info'>Đặt lịch ngay</MDBBtn>
                            <MDBBtn outline color='info' onClick={toggleClose}>
                                Đóng
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <nav aria-label='...' style={{justifyContent: "center", display: "flex"}} className="mt-5 mb-5">
                <MDBPagination size='lg' className='mb-0'>
                    {paginationItems.map(page => page)}
                </MDBPagination>
            </nav>
        </MDBContainer>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa dịch vụ "{homeById.serviceName}" không?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
        <Footer/>
    </div>;
}