
import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";

function ThirdComponent() {
    let navigate = useNavigate()

    return (
        <div>
            <Header2/>
            <h1>
                Facials
            </h1>
            <button onClick={() => {navigate("/")} }> Back </button>

        </div>
    );
}
export default ThirdComponent;