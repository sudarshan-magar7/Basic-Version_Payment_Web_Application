/* eslint-disable no-unused-vars */
import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import {useState} from "react";
import { data } from "react-router-dom"
export const Signup = () => {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLasttName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
     
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={
          (e)=>{
            setFirstName(e.target.value)
          }
        } placeholder="John" label={"First Name"} />
        <InputBox  onChange={
          (e)=>{
            setLasttName(e.target.value)
          } }placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={
          (e)=>{
            setEmail(e.target.value)
          }
        } placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={
          (e)=>{
            setPassword(e.target.value)
          }
        } placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={() => {
    axios.post('http://localhost:8081/v1/api/create', {
      firstName,
      lastName,
      email,
      password
    })
    .then((response) => {
      console.log(response.data); // Log the response data properly
    })
    .catch((error) => {
      console.error('Error:', error); // Handle errors gracefully
    });
  }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}