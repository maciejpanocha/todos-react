import React from 'react';
import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li
                className={`list__item${props.hiding && task.done ? " list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--toggleDone">✔</button>
                <span className={`list__span${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove">✘</button>
            </li>
        ))}
    </ul>
);

export default Tasks;