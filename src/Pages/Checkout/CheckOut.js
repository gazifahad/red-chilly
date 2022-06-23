import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './checkOut.scss'
import Footer from "../Shared/Footer/Footer";
import PageTItle from "../Shared/PageTitle/PageTItle";

const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().required().positive().integer(),
    website: yup.string().url()
});

const CheckOut = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="checkout-body">
            <PageTItle title='checkout'></PageTItle>
            <h2 className="text-center text-secondary pt-3">please provide your information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" container checkout-inputs  w-50 w-sm-100">
                    <div className=" d-flex flex-column">
                        <label>First Name</label>
                        <input {...register("firstName")} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div className=" d-flex flex-column" style={{ marginBottom: 10 }}>
                        <label>Last Name</label>
                        <input {...register("lastName")} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <label>Age</label>
                        <input  type="number" {...register("age", { valueAsNumber: true })} />
                        {errors.age && <p>{errors.age.message}</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <label>Adress</label>
                        <input className="address" {...register("Adress")} />
                       
                    </div>
                    </div>
                    <input className="btn btn-secondary w-25 d-block mx-auto" type="submit" />
                
            </form>
            
        </div>
    );
};

export default CheckOut;