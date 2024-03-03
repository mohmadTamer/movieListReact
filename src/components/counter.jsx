import React, { Component } from 'react';

export class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    handleIncremnt = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1, });
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}
                    style={{ fontSize: 20 }} >
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncremnt({ id: 1 })}
                    className='btn btn-success btn-sm m-2'>Increment</button>
                {/* <ul>
                    {this.renderTage()}
                </ul> */}

            </React.Fragment>
        )

    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.state.count === 0 ? 'warning' : 'primary');
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "ZERO" : count
    }
    renderTage() {
        return this.state.tags.length === 0 ? <h2>No items to show</h2>
            : this.state.tags.map(tag => <li key={tag}> {tag} </li>)
    }
}
export default Counter