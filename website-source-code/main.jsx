// Main Entry Point for EWB-UTK Website
// This file initializes the React application and renders it to the DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error Boundary Component - Catches JavaScript errors anywhere in the component tree
// Provides a fallback UI instead of crashing the entire application
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to track error status
    this.state = { hasError: false, error: null };
  }

  // Static method called when an error is thrown during rendering
  static getDerivedStateFromError(error) {
    // Update state to show error UI on next render
    return { hasError: true, error };
  }

  // Lifecycle method called when an error is caught
  componentDidCatch(error, errorInfo) {
    // Log error details for debugging (can be sent to error reporting service)
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    // If an error occurred, render fallback UI
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            {/* Error icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            
            {/* Error heading */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            
            {/* Error description */}
            <p className="text-gray-600 mb-4">
              We're sorry, but there was an error loading the page.
            </p>
            
            {/* Reload button with UTK branding */}
            <button
              onClick={() => window.location.reload()}
              className="bg-utk-orange hover:bg-utk-orange-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    // If no error, render children components normally
    return this.props.children;
  }
}

// Initialize React application
// React.StrictMode helps identify potential problems in development
// ErrorBoundary wraps the entire app to catch any unhandled errors
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
