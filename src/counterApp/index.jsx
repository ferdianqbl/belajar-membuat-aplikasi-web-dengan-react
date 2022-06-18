import React from "react";

function CounterDisplay({ count }) {
  if (count % 5 === 0 && count % 7 === 0 && count !== 0) return <p>FizzBuzz</p>;
  if (count % 5 === 0 && count !== 0) return <p>Fizz</p>;
  if (count % 7 === 0 && count !== 0) return <p>Buzz</p>;
  return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }
  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <ResetButton reset={this.onResetEventHandler.bind(this)} />
        <CounterDisplay count={this.state.count} />
        <IncreaseButton increase={this.onIncreaseEventHandler.bind(this)} />
      </div>
    );
  }
}

export default CounterApp;
