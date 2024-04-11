import {useNavigate, useParams} from "react-router-dom";
import {productsService} from "../service/productsService";
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {typeService} from "../service/typeService";
import {toast} from "react-toastify";

export function UpdateProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [types, setType] = useState([]);
    const fetchData = async () => {
        try {
            const respone = await productsService.findById(id);
            const respone1 = await typeService.findAll();
            await setProduct(respone.data);
            await setType(respone1.data);
            console.log(respone.data)
        } catch (err) {
            console.log(err);
        }
    }
    const handleSchema = yup.object({
        name: yup.string().required("Tên sản phẩm không được để trống!").max(100, "Tên sản phẩm không được vượt quá 100 kí tự!"),
        quantity: yup.number("Số lượng sản phẩm phải là số nguyên").min(1, "Số lượng phải lớn hơn 0"),
        date: yup.string("Không được để trống")
    })
    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        console.log(value.type)
        const newVal = {...value, id: id};
        console.log(newVal)
        await productsService.updateProduct(newVal,id);
        navigate("/");
        toast("Bạn đã cập nhật sản phẩm thành công");
    }

    useEffect(() => {
        fetchData();
    }, []);
    return <div>
        <Formik enableReinitialize={true}
                initialValues={{
                    name: product.name || "",
                    date: product.date || "",
                    quantity: product.quantity || "",
                    type: product.type || ""
                }} onSubmit={handleSubmit} validationSchema={handleSchema}>
            <Form>
                <div>
                    <label htmlFor="name">Tên sản phẩm:</label>
                    <Field type="text" name="name" id="name"/>
                    <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="date">Ngày nhập</label>
                    <Field type="date" name="date" id="name"/>
                    <ErrorMessage name="date" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="quantity">Số lượng:</label>
                    <Field type="text" name="quantity" id="quantity"/>
                    <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="typeId">Thể loại:</label>
                    <Field as="select" name="type">
                        {types.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </Field>
                </div>
                <button type="submit">Cập nhật</button>
            </Form>
        </Formik>
    </div>
}