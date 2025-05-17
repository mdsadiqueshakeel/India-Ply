import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '6rem', fontWeight: '700', color: '#a0522d' }}>404</h1>
      <h3 style={{ color: '#333', marginBottom: '1rem' }}>Oops! Page not found.</h3>
      <p style={{ maxWidth: '500px', color: '#555' }}>
        The page you're looking for doesn't exist or has been moved. Please go back to the homepage.
      </p>
      <Link to="/" className="btn btn-primary mt-4" style={{ backgroundColor: '#a0522d', borderColor: '#a0522d' }}>
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
