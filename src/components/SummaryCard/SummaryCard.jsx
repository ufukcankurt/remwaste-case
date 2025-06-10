import React from 'react';

export default function SummaryCard({ selectedSkip, setSelectedSkip }) {
  return (
    <div
      className='
        fixed bottom-0 left-0 right-0 
        md:sticky          
        md:bottom-0         
        md:top-[24px]
        w-full
        md:min-h-[443px]
        bg-[var(--content-background)] text-[var(--text-primary)]
        flex flex-col items-center
        border-[var(--border-color)]
        shadow-lg
        z-10 p-2
        rounded-md overflow-hidden
      '
    >
      <div className='w-full hidden md:flex items-center justify-between mb-4 px-2 py-2'>
        <h2 className='text-xl md:text-xl font-bold text-[var(--text-primary)] leading-tight'>Summary</h2>
        <button
          className={`
            px-4 py-1
            bg-blue-50
            text-blue-600
            font-medium
            rounded-lg
            transition
            hover:bg-blue-100
            focus:outline-none
            text-base
            shadow-sm
            ${selectedSkip ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}
          `}
          onClick={() => setSelectedSkip(null)}
          disabled={!selectedSkip}
        >
          Clear
        </button>
      </div>
      <div className='w-full flex items-center gap-3 bg-[var(--summary-card-bg)] text-center text-[var(--summary-card-text)] text-xs md:text-sm md:px-4 py-2 px-2 md:py-3 rounded-lg'>
        Imagery and information shown throughout this website may not reflect the exact shape or size specification,
        colours may vary, options and/or accessories may be featured at additional cost.
      </div>
      {selectedSkip ? (
        <>
          {/* Mobile Version */}
          <div className='flex md:hidden items-center space-x-6 mt-2 mb-1 md:mt-8'>
            <div className='text-sm md:text-base font-semibold'>{selectedSkip.size} Yard Skip</div>
            <div className='text-sm md:text-base font-semibold text-blue-500'>£{selectedSkip.price_before_vat}</div>
            <div className='text-xs md:text-sm text-gray-400'>{selectedSkip.hire_period_days} day hire</div>
          </div>

          {/* Desktop Version */}
          <div className='hidden md:grid w-full grid-cols-4 items-center gap-2 mt-2 mb-1 md:mt-8 md:mb-8'>
            <div className='col-span-1 flex items-center justify-center'>
              <div className='w-16 h-16 rounded-md flex items-center justify-center'>
                <img src={`/images/${selectedSkip.size}-yarder-skip.jpg`} alt='' className='object-cover rounded-md' />
              </div>
            </div>
            <div className='col-span-2 flex flex-col items-center min-w-0'>
              <span className='text-base font-semibold text-center truncate w-full'>{selectedSkip.size} Yard Skip</span>
              <span className='text-sm text-gray-400 text-center truncate w-full'>
                {selectedSkip.hire_period_days} day hire
              </span>
            </div>
            <div className='col-span-1 text-xl font-bold text-[var(--accent-primary)] text-center min-w-[40px]'>
              £{selectedSkip.price_before_vat}
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 mt-2 mb-2 md:mt-4 md:mb-4'>
            <button
              className='
                px-4 py-2
                bg-[var(--background-secondary)]
                text-[var(--text-primary)]
                font-medium
                rounded-3xl
                shadow-none
                transition
                hover:bg-[var(--background-secondary)]
                focus:outline-none
                cursor-pointer
              '
            >
              Back
            </button>
            <button
              className='
                px-4 py-2
                bg-[var(--accent-primary)] text-white
                font-medium
                rounded-3xl
                shadow-none
                transition
                hover:bg-[var(--accent-primary)]
                focus:outline-none
                cursor-pointer
                disabled:cursor-not-allowed
              '
              disabled={!selectedSkip}
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        <div className='w-full text-center text-[var(--text-secondary)] italic mt-16 mb-8'>
          Please select a skip to continue
        </div>
      )}
    </div>
  );
}
