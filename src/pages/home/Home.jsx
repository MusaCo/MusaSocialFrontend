import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
    const [isLoggedin, setisLoggedin] = useState(true)
    //const{user, isFetching, error, dispatch} = useContext(AuthContext);
    
    useEffect(() => {
        const checkifLoggedin = async () =>{
            // dispatch({type: "LOGIN_START"});
            // try {
            //     const res = await axios.get("https://musasocialapi.herokuapp.com/auth/login");
                // if (res.data.Loggedin === true) {
                //     setisLoggedin(true)
                //     dispatch({type: "LOGIN_SUCCESS", payload: res.data.message});
                // }
            //     else{
            //         setisLoggedin(false);
            //     }
            // } 
            // catch (error) {
            //     setisLoggedin(false);
            //     dispatch({type: "LOGIN_FAILURE", payload: error});    
            //  }
            try {
                const accesstoken = localStorage.getItem("accesstoken")
                const res = await axios.get("https://musasocialapi.herokuapp.com/auth/login", {
                    headers: {
                        authorization: "Bearer " + accesstoken
                    }
                });
                if (res.data.Loggedin === true) {
                    setisLoggedin(true)
                }
                else{
                    setisLoggedin(false);
                }
            } 
            catch (error) {
                setisLoggedin(false);
             }
        }
        checkifLoggedin();
        
    }, [])

    if (!isLoggedin) {
        return <Redirect to="/login" />
    }

    return (
        <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        
        </>
    )
}
