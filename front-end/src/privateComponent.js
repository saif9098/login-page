// means routes which should seen only iff user has loged in 
import React from "react";
import { Navigate,Outlet } from "react-router-dom"; //outlet-as privatecompnent is a raper,inside it we pass a component as a prose which is handled by outlet


const Privatecomponent = ()=>{
    const auth = localStorage.getItem('userdetail');
    return auth?<Outlet />:<Navigate to="/signup" /> // ? means if in localstorage value exist on user then only show all pages other wise don't
} 

export default Privatecomponent;