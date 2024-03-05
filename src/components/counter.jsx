import React, { Component } from 'react';

export class Counter extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="container">
                    <div className="row">
                        {/* <div className="col-12"> */}
                        <div className="col-1">
                            <span className={this.getBadgeClasses()}
                                style={{ fontSize: 20 }} >
                                {this.formatCount()}
                            </span>
                        </div>
                        <div className="col">
                            <button
                                onClick={() => this.props.onIncremnt(this.props.counter)}
                                className='btn btn-success btn-sm p-2'>
                                +
                            </button>
                            {(this.props.counter.value === 0) ?
                                <button
                                    className='btn btn-danger btn-sm p-2 m-2' disabled>-</button>
                                :
                                <button
                                    onClick={() => this.props.onDecremnt(this.props.counter)}
                                    className='btn btn-danger btn-sm m-2 p-2 '>-</button>
                            }

                            <button
                                onClick={() => this.props.onDelete(this.props.counter.id)}
                                className='btn btn-danger btn-sm p-2'>
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* <br /> */}


                </div>


            </React.Fragment>
        )

    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.props.counter.value === 0 ? 'warning' : 'primary');
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? "ZERO" : value
    }

}
export default Counter


