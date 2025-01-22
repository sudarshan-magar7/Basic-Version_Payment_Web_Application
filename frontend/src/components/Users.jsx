/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";
import axios from "axios";

export const Users = () => {
    // State for storing users and filter text
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(""); 
    


    // Fetch users whenever the filter changes
    useEffect(() => {
        axios
            .get(`http://localhost:8081/v1/api/user/bulk?filter=${filter}`,{
                headers: {
                    Authorization:localStorage.getItem("token") // Retrieve token from localStorage
                }
            })
            .then((response) => {
                setUsers(response.data.user);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                    value={filter} // Bind the state to the input
                    onChange={(e) => setFilter(e.target.value)} // Update filter on input change
                />
            </div>
            <div>
                {users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    let navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button onClick={()=>{
                    navigate("/send?user="+user.firstName+"&user_id="+user._id);
                }} label={"Send Money"} />
            </div>
        </div>
    );
}
