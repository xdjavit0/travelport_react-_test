import React from 'react'
import { Button } from '../DefaultButton/styles.js'


const DefaultButton = ({ text = "click", onclick = null }) => {
    const sendState = (event) => {
        if (onclick !== null) {
          onclick()
        }
    }
    return (
        <Button className='DefaultButton' data-testid='Button' onClick={event=> {sendState(event)}}>{text}</Button>
    )
}
export default DefaultButton