import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import {Users} from "../components/Users"

export const Dashboard=()=>{
    return <div className="p-10">
        <Appbar/>
        <Balance/>
        <Users/>
    </div>

}