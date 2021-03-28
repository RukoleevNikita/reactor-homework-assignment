import React from 'react'

import cls from './Counter.module.css'

import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

export default class extends React.Component {
    state = {
        val: this.props.min
    }

    increase = () => {
        this.set(this.state.val + 1)
    }

    decrease = () => {
        this.set(this.state.val - 1)
    }

    set(newVal) {
        let val = Math.min(Math.max(newVal, this.props.min), this.props.max)
        this.setState({val : val})
    }
    render() {
        return (
            <div className={cls.items}>
                <h1>{this.state.val}</h1>
                <div className={cls.item}>
                    <Button size='mini' onClick={this.decrease}>-</Button>
                    <Button size='mini' onClick={this.increase}>+</Button>
                </div>
            </div>
        )
    }
}