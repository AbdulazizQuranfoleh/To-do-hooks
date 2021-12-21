import React from "react";

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder="BUT YOUR TASK"
            />
            <button type="submit">Add ToDo</button>
        </form>
    );
}