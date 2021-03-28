import React, {useState} from 'react'
import PropTypes from 'prop-types'

import cls from './Counter.module.css'

import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

function Some(props) {

    let [count, setCount] = useState(props.min)
    
    let addBasket = () => {
        setCount(count + 1)
    }
    
    
    let deleteBasket = () => {
        setCount(count - 1)
    }

    let onCangeValue = (el) => {
        setCount(el)
    }


    if (count > props.max) {
        var display = `Вы можете заказать либо ${props.min} либо ${props.max} товаров`
        var buttonDisabledMax = true;
    }
    
    if (count < props.min) {
        var display = `Вы можете заказать либо ${props.min} либо ${props.max} товаров`
        var buttonDisabledMin  = true;
    }

    return (
        <div className={cls.items}>
            <h1>{count}</h1>
            <div className={cls.item}>
                <Button size='mini' onClick={deleteBasket} disabled={buttonDisabledMin}>-</Button> 
                <Input placeholder='...' onChange={event => onCangeValue(Number(event.target.value))} value={count}/> 
                <Button size='mini' onClick={addBasket} disabled={buttonDisabledMax}>+</Button>
            </div>
            <div className={cls.warning}>{display}</div>
        </div>
    )
}

export default Some;

Some.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
}