"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitComponent = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="bt" id="bt">
            <span className="msg" id="msg"></span>
            {pending ? "ENVIANDO" : "ENVIAR"}
        </button>
    );
};

export default SubmitComponent;
