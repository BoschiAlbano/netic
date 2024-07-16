import React from "react";

const RadioButoonComponent = () => {
    return (
        <div className="radio-button-container">
            <div className="radio-button">
                <input
                    type="radio"
                    className="radio-button__input"
                    id="radio1"
                    name="radio-group"
                />
                <label className="radio-button__label" htmlFor="radio1">
                    <span className="radio-button__custom"></span>
                    50Mb
                </label>
            </div>
            <div className="radio-button">
                <input
                    type="radio"
                    className="radio-button__input"
                    id="radio2"
                    name="radio-group"
                />
                <label className="radio-button__label" htmlFor="radio2">
                    <span className="radio-button__custom"></span>
                    100Mb
                </label>
            </div>
            <div className="radio-button">
                <input
                    type="radio"
                    className="radio-button__input"
                    id="radio3"
                    name="radio-group"
                />
                <label className="radio-button__label" htmlFor="radio3">
                    <span className="radio-button__custom"></span>
                    200Mb
                </label>
            </div>
        </div>
    );
};

export default RadioButoonComponent;
