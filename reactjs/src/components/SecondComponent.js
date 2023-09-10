import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";

function SecondComponent() {
    let navigate = useNavigate()
    return (
        <div>
            <Header2/>
            <h1>
            Secret RF
            </h1>
            <button onClick={() => {navigate("/")} }> Back </button>
        </div>
    );
}
export default SecondComponent;