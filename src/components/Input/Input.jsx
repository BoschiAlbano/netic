"use client";
import React from "react";

const InputComponent = ({
    palabra = "Boschi",
    name = "null",
    type = "value",
    defaultValue = "",
    required = true,
}) => {
    return (
        <div className=" w-full form-control">
            <input
                type={type}
                required={required}
                name={name}
                defaultValue={defaultValue}
                placeholder=""
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
