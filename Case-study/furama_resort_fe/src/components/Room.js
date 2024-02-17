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
import {getHome} from "../redux/action/home";
import {getRoom} from "../redux/action/room";

export default function Room() {
    const room = useSelector(state => state.room);
    const [totalPage, number] = useSelector(state => state.totalPagesRoom)
    const dispatch = useDispatch();
    const [topRightModal, setTopRightModal] = useState(false);
    const [roomModal, setRoomModal] = useState({});
    const paginationItems = [];
    for (let i = 0; i < totalPage; i++) {
        if (i === number) {
            paginationItems.push(
                <MDBPaginationItem key={i+1} className='page-item active' aria-current='page'>
                    <MDBPaginationLink tag='span' className='page-link' onClick={() => dispatch(getRoom(i))}>
                        {i+1}<span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
            );
        } else {
            paginationItems.push(
                <MDBPaginationItem key={i+1}>
                    <MDBPaginationLink href='#' onClick={() => dispatch(getRoom(i))}>{i+1}</MDBPaginationLink>
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
        const roomModal1 = room.find(v => v.id === id);
        setRoomModal(roomModal1);
    };

    const toggleClose = () => {
        setTopRightModal(!topRightModal);
    }
    useEffect(() => {
        dispatch(getRoom());
    }, []);
    return <div>
        <MDBContainer>
            <MDBRow>
                {room.map(r => (
                    <MDBCol className="col-md-4 mt-5" size='md' key={r.id}>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={r.photo} fluid alt='...'/>
                                <a>
                                    <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>{r.serviceName}</MDBCardTitle>
                                <MDBCardText>
                                    {r.description}
                                </MDBCardText>
                                <MDBCardTitle style={{color: "red"}}>Chí phí
                                    thuê: {r.rentalCost.toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })}/{r.rentalTypeName}</MDBCardTitle><br/>
                                <MDBBtn color='info'>Đặt lịch ngay</MDBBtn>
                                <MDBBtn style={{marginLeft: "20px"}} outline color='info'
                                        onClick={() => toggleOpen(r.id)}>
                                    Chi tiết
                                </MDBBtn>
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
                            <MDBModalTitle>{roomModal.serviceName}</MDBModalTitle>
                            <MDBBtn
                                color='none'
                                className='btn-close btn-close-white'
                                onClick={toggleClose}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='row'>
                                <div className='col-5 text-center'>
                                    <MDBCardImage src={roomModal.photo} fluid alt='...'/>
                                    <MDBCardImage style={{width: "75%", marginTop: "20px"}}
                                                  src="https://d3nax9sawz4kbl.cloudfront.net/company_logos/e8519e0026f93e93a626c8744cdf0977.png"
                                                  fluid alt='...'/>
                                </div>

                                <div className='col-7'>
                                    <p>Loại dịch vụ: {roomModal.serviceTypeName}</p>
                                    <p>Số người tối đa: {roomModal.maxPeople}</p>
                                    <p>Diện tích: {roomModal.area}</p>
                                    <p>Chi phí
                                        thuê: {roomModal.rentalCost ? roomModal.rentalCost.toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) : null}/{roomModal.rentalTypeName}</p>
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
        <Footer/>
    </div>;
}