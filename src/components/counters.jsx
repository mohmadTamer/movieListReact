import React, { Component } from 'react';
import Counter from './counter'

export class Counters extends Component {
    render() {
        const {onReset,counters,onDelete,onIncremnt,onDecremnt} = this.props
        return (
            <div>
                <button
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'>Reset
                </button>
                <br />
                {counters.map(c => (
                    <Counter
                        key={c.id}
                        onDelete={onDelete}
                        onIncremnt={onIncremnt}
                        onDecremnt={onDecremnt}
                        counter={c}
                    />
                ))}
            </div>
        )
    }
}
