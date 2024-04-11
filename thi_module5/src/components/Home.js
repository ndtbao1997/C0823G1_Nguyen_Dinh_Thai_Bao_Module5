import React, {useEffect, useState} from "react";
import {productsService} from "../service/productsService";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import {typeService} from "../service/typeService";

export function Home() {
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const respone = await productsService.findAll();
            // const respone1 = await typeService.findAll();
            setProducts(respone.data);
            // setTypes(respone1.data)
        } catch (err) {
            console.log(err);
        }

    }
    const navigate = useNavigate();
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }

    const [search, setSearch] = useState("");
    const [search1, setSearch1] = useState(0);
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleChange1 = (e) => {
        setSearch1(e.target.value);
    }

    const [alert,setAlert] = useState("");
    const handleSearch = async () => {
        const respone2 = await productsService.searchProduct(search,search1);
        if (respone2.data.length === 0) {
         setAlert("Không có sản phẩm nào cả")
           setProducts([]);
        } else {
            setAlert("");
            setProducts(respone2.data);
        }
    }


    let table = null;
    if (products.length !== 0){
        table =  <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Ngày nhập</th>
                <th>Số lượng</th>
                <th>Loại sản phẩm</th>
                <th>Sửa</th>
            </tr>
            </thead>
            <tbody>
            {products.map((p, index) => (
                <tr key={p.id}>
                    <td>{index + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.date}</td>
                    <td>{p.quantity}</td>
                    <td>{p.typeName}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={() => handleUpdate(p.id)}>
                            Sửa
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    }
    return <div>
        <h1>Danh sách sản phẩm</h1>
        <input type="text" name="search" onChange={handleChange}/>
        <button onClick={handleSearch}>Tìm kiếm</button><br></br>
        <label htmlFor="typeId">Thể loại:</label>
        <select name='typeId' onChange={handleChange1}>
            {types.map((t) => (
                <option value={t.id}>{t.name}</option>
            ))}
        </select>
        <br></br>
        <h1>{alert}</h1>
        {table}
    </div>;
}