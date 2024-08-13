import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../../Context.js'
import './Toast.css'

const Toast = ({ msg }) => {
    const { state, dispatch } = useContext(StateContext)
    return (
        <>
            <div className="toast__container" >
                <span>
                    <p class="text-sm">{msg} <i class="fa fa-close close-toast-success" onClick={() => dispatch({ type: 'SET_SHOW_TOAST', payload: !state.showtoast })}></i>
                    </p></span>
            </div>
        </>
    )
}

export { Toast }