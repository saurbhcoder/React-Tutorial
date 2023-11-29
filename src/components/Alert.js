import React from 'react'

function Alert(props) {
    return (
        props.alertText && <div class={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alertText.msg}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert 