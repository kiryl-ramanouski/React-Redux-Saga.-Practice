import React from 'react';
import { Alert } from './Alert';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Alert />;
    }
    return this.props.children;
  }
}
