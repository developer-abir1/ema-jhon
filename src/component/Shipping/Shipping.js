import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../CostomHook/useAuth';
import './shipping.css'


const Shipping = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    const { user } = useAuth()
    return (
        <div>
            <div className="shipping-from">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} placeholder="Enter your name" {...register("name", { required: true })} />


                    <input defaultValue={user.email} placeholder="Enter your Email address" {...register("email", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input placeholder="Enter your  address" {...register("address", { required: true })} />
                    <input placeholder="Enter your phone number" {...register("phone", { required: true })} />
                    <input placeholder="Enter city name" {...register("city", { required: true })} />


                    <input type="submit" className="regular-btn" value="Shipping Product" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;