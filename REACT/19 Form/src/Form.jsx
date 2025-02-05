import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data =>console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" {... register('name',{required:'Name is Required'})} />
        {errors.name && <span>{errors.name.message}</span>}
        <br />
        <label htmlFor="Email">Email</label>
        <input type="text"  name="Email" {...register('Email',{required:'Email is Required'})} />
        {errors.Email && <span>{errors.Email.message}</span>}
        <br />
        <label htmlFor="password">Password</label>
        <input type="password "  name="password" {...register('password',{required:'Email is Required'})} />
        {errors.password && <span>{errors.password.message}</span>}

        <br />
        <label htmlFor="age">Age</label>
        <input type="text"  name="age" {...register('Age',{required:'Age is Required'})} />
        {errors.Age && <span>{errors.Age.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
