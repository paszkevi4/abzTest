import React from 'react'
import './customInput.sass'


//custom input. chenges styles for invalid forms
export let Input = ({input, meta, ...props}) => {
    let anError = meta.error && meta.touched;
    return(
        <div className= { 'field' + ' ' + (anError ? 'error' : ' ')}>
            <input {...input} {...props} />
            {anError && <h5>Error</h5>}
        </div>
    )
}