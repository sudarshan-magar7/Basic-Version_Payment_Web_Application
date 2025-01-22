import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"


export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => {
          setEmail(e.target.value);
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={() => {
            axios.post(` http://localhost:8081/v1/api/login`, {
              email,
              password
            }).then((response) => {
              console.log(response.data);
              const token = response.data.token;

              if (token) {
                localStorage.setItem("token", token); // Store the token in local storage
                console.log("Token saved to local storage:", token);
              } else {
                console.error("No token received in the response");
              }
              // Log the response data properly
            })
              .catch((error) => {
                console.error('Error:', error); // Handle errors gracefully
              });
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}