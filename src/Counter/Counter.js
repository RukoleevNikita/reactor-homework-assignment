import React from 'react'

import cls from './Counter.module.css'

import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

export default class Counter extends React.Component {
    state = {
        value: 0
    }

    addBasket = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1
            }
        })
    }

    deleteBasket = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value - 1
            }
        })
    }


    render() {
        return (
            <div className={cls.items}>
                <h1>{this.state.value}</h1>
                <div>
                <Button size='mini' onClick={this.deleteBasket}>-</Button>
                <Input placeholder='...' />
                <Button size='mini' onClick={this.addBasket}>+</Button>
               </div>
            </div>
        )
    }
}