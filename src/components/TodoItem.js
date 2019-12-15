import React from 'react'
import '../styles.css'

/* To apply multiple styles to an element use an object and camelcase.  
Also, use colons after each property name and a comma after it. 
*/

function TodoItem(props){
	const completedStyle = {
		fontStyle: "italics",
		color: "#999999",
		textDecoration: "line-through"
	}

    return(
        <div className="TodoItem-wrapper">  
            <input 	type="checkbox" 
            		onChange={() => props.handleChange(props.item.id)} 
			/>
			<span className="TodoItem-text" style={props.item.completed ? completedStyle : null}>
			{props.item.text}
			</span> <br/>

        </div>
    )
}

export default TodoItem