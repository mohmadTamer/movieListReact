import React, { Component } from "react";
import "./App.css";
// import Movies from "./components/movies";
import { Counters } from "./components/counters";
import { Navbar } from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelDelete = (counterID) => {
    this.setState({
      counters: this.state.counters.filter((m) => m.id !== counterID),
    });
  };

  handelReset = () => {
    const resetCounter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ resetCounter });
  };

  handelIncremnt = (counter) => {
    // const index = this.state.counters.indexOf(counter);
    // this.setState({ value: this.state.counters[index].value++ });

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handelDecremnt = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
    // (this.state.counters.count !== 0) &&
    //     this.setState({ value: this.state.counters.value - 1, });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncremnt={this.handelIncremnt}
            onDecremnt={this.handelDecremnt}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
