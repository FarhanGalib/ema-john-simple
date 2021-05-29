import React from 'react';
import { useForm } from 'react-hook-form';
import {useAuth} from '../Login/useAuth';
import './Shipment.css';

const Shipment = () => {
    const auth = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    

    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={auth.user.name} {...register("name", { required: true })} placeholder="name" />
            {errors.name && <span><small> Name field is required</small></span>}
            
            <input defaultValue={auth.user.email} {...register("email", { required: true })} placeholder="email"/>
            {errors.email && <span><small>Email field is required</small></span>}


            <input  {...register("address1", { required: true })} placeholder="address line 1"/>
            {errors.address1 && <span><small>address1 field is required</small></span>}

            <input  {...register("address2", { required: true })} placeholder="address line 2"/>
            {errors.address2 && <span><small>address2 field is required</small></span>}

            <input  {...register("city", { required: true })} placeholder="city"/>
            {errors.city && <span><small>city field is required</small></span>}

            <input  {...register("country", { required: true })} placeholder="country"/>
            {errors.country && <span><small>country field is required</small></span>}

            <input  {...register("zipcode", { required: true })} placeholder="zip code"/>
            {errors.zipcode && <span><small>zip code field is required</small></span>}

            
            
            <input id="btn" type="submit" />
        </form>
    );
};

export default Shipment;