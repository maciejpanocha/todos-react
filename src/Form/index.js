import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" placeholder="zrobić pranie..." autofocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;