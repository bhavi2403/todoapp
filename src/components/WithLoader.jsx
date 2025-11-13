import React from "react";

export default function withLoader(Component) {
  return function WrappedComponent({ loading, ...props }) {
    if (loading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}
