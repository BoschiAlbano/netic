"use client";
import React from "react";

const InputComponent = ({
    palabra = "Boschi",
    name = "null",
    type = "value",
    defaultValue = "",
}) => {
    return (
        <div className=" w-full form-control">
            <input
                type={type}
                required={true}
                name={name}
                defaultValue={defaultValue}
            />
            <label>
                {palabra.split("").map((letra, index) => {
                    return (
                        <span
                            key={index}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {letra}
                        </span>
                    );
                })}
            </label>
        </div>
    );
};

export default InputComponent;
