import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {baiHatService} from "../service/baiHatService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function Register(){
    const navigate = useNavigate();
    const handleSchema = yup.object({
        tenBaiHat: yup.string().required("Tên bài hát không được để trống!").max(30,"tên b"),
        caSi: yup.string().required("Tên ca sĩ không được để trống!"),
        nhacSi: yup.string().required("Tên nhac sĩ không được để trống!"),
        thoiGianPhat: yup.string().required("Thời gian phát không được để trống!").matches(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/,"Thời gian phát phải có định dạng hh:mm!")
    })

    const handleSubmit = async (value) => {
        const newValue = {...value, soLuot: 0, trangThaiId: 1}
        await baiHatService.addBaiHat(newValue);
        toast("Bài hát đã đăng kí thành công!");
        navigate(`/`)
    }
    return <><h1>Đăng kí bài hát</h1>
    <Formik initialValues={{
        tenBaiHat: "",
        caSi:"",
        nhacSi:"",
        thoiGianPhat:""
    }} validationSchema={handleSchema} onSubmit={handleSubmit}>
        <Form>
            <div>
                <label htmlFor="tenBaihat">Tên bài hát:</label><br/>
                <Field type="text" name="tenBaiHat"></Field><br/>
                <ErrorMessage name="tenBaiHat" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div>
                <label htmlFor="tenBaihat">Ca sĩ:</label><br/>
                <Field type="text" name="caSi"></Field><br/>
                <ErrorMessage name="caSi" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div>
                <label htmlFor="tenBaihat">Nhạc sĩ:</label><br/>
                <Field type="text" name="nhacSi"></Field><br/>
                <ErrorMessage name="nhacSi" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div>
                <label htmlFor="tenBaihat">Thời gian phát:</label><br/>
                <Field type="text" name="thoiGianPhat"></Field><br/>
                <ErrorMessage name="thoiGianPhat" component="span" style={{color: "red"}}></ErrorMessage>
            </div><br/>
            <button type="submit">Đăng kí</button>
        </Form>
    </Formik></>
}