import React from 'react';
import "./style.css";

const Section = (props) => (
    <section className="section">
        <h2>{props.title}</h2>
        {props.extraButtons}
        {props.body}
    </section>
);

export default Section;