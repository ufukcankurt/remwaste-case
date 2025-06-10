import React from 'react';

const Loading = ({ message = 'Loading...', fullscreen = true, className = '' }) => (
  <div
    className={`
      ${fullscreen ? 'fixed inset-0 z-50' : ''}
      flex items-center justify-center
      bg-[var(--content-background)] bg-opacity-80
      ${className}
    `}
    style={{ minHeight: fullscreen ? '100vh' : undefined }}
  >
    <div className='flex flex-col items-center gap-4'>
      <div className='w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin'></div>
      <span className='text-lg text-[var(--text-secondary)] font-medium'>{message}</span>
    </div>
  </div>
);

export default Loading;
