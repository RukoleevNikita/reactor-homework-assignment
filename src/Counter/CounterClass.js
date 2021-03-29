import React from 'react'
import PropTypes from 'prop-types'

import cls from './Counter.module.css'

import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

export default class Some extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,  
        max: PropTypes.number.isRequired   
     }

    state = {
        val: this.props.min,
        inputValue: this.props.min
    }

    increase = () => {
        this.set(this.state.val + 1)
    }

    decrease = () => {
        this.set(this.state.val - 1)
    }

    set(newVal) {
        let val = Math.min(Math.max(newVal, this.props.min), this.props.max)
        this.setState({
            val : val,
            inputValue: val 
        }) 
    }

    setValue(newStr) {
        this.setState({inputValue: newStr})
        // let val = parseInt(newStr)

        // if(isNaN(val)) {
        //     val = this.props.min
        // }
        // this.set(isNaN(val) ? this.props.min : val)
    }

    applyValue = () => {
        let val = parseInt(this.state.inputValue)
        this.set(isNaN(val) ? this.props.min : val)
    }

    render() {
        return (
            <div className={cls.items}>
                {this.state.val} <br/>
                {this.state.inputValue}
                <h1>{this.state.val}</h1>
                <div className={cls.item}>
                    <Button size='mini' onClick={this.decrease}>-</Button>
                    <Input 
                        placeholder='...' 
                        onChange={(e) => this.setValue(e.target.value)} 
                        value={this.state.inputValue}
                        onBlur={this.applyValue}
                    /> 
                    <Button size='mini' onClick={this.increase}>+</Button>
                </div>
            </div>
        )
    }
}

// Some.defaultProps = {
//     min: 1,  
//     max: 5 
// }

