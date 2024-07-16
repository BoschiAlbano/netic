import React from "react";

const RadioButoonComponent = () => {
    return (
        <div className="radio-button-container">
            <div className="radio-button">
                <input
                    type="radio"
                    className="radio-button__input"
                    id="radio1"
                    name="Plan"
                    defaultValue={50}
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
                    name="Plan"
                    defaultValue={100}
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
                    name="Plan"
                    defaultValue={200}
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
