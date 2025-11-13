import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  handleReset = () => {
    this.setState({ hasError: false, message: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-box">
          <h3> Error: {this.state.message}</h3>
          <button onClick={this.handleReset}>Go Back</button>
        </div>
      );
    }
    return this.props.children;
  }
}
