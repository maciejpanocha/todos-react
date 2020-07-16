import React from 'react';
import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons">
            <h2>Lista zadań</h2>
            <button className={`buttons__button${props.tasks.length > 0 ? "" : " buttons__button--hidden"}`}>
                {props.hiding ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button className={`buttons__button${props.tasks.length > 0 ? "" : " buttons__button--hidden"} ${props.tasks.every(({ done }) => done) ? " buttons__button--disabled" : ""}`}>
                Ukończ wszystkie
                </button>
        </div>
    )
);

export default Buttons;