import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup.object({
  username: yup.string().typeError('must be between 2 and 20 characters long').min(3, 'must be at least 3 characters long').max(20, 'must not be over 20 characters long').lowercase().trim().required(),
  email: yup.string().email('must be a valid email').max(50, 'must be less than 50 characters').required(),
  age: yup.number('must be a number').required().positive('must be valid age').integer('must be whole number'),
}).required();


function Form() {

  
    const { register, handleSubmit, watch, reset, formState: { errors, isDirty, isValid, isSubmitting }, formState } = useForm({
      mode: "onBlur", 
      resolver: yupResolver(schema)
    });

    useEffect(() => {
      console.log("formState", formState);
      console.log("errors", errors);
    });




const submitHandler = (values) => {
  console.log(values)
reset();
}




  return (

    <>
   <form onSubmit={handleSubmit(submitHandler)}>
    <label>Username</label>
<input type="text" {...register("username", {required: true} )} placeholder="Username" />
{errors.username && <p>{errors.username.message}</p>}

<label>Email</label>
<input type="text" {...register("email", {required: true})} placeholder="Email" />
{errors.email && ( <span>{errors.email.message}</span>)}

<label>Age</label>
<input type="text" {...register("age", {required: true})} placeholder="Age" />
{errors.age && ( <span>{errors.age.message}</span>)}

<button type="submit" disabled={isSubmitting || !isValid || !isDirty}>Submit</button>
<button type="reset" onClick={reset}>Clear</button>
   </form>

</>
  )


}

export default Form