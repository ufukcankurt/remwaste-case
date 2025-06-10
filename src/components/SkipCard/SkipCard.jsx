import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoMdWarning } from 'react-icons/io';
import { IoMdCheckmarkCircle } from 'react-icons/io';

export default function SkipCard({ skip, isSelected, onSelect }) {
  return (
    <div
      className={`
        bg-[var(--content-background)]
        text-[var(--text-primary)] 
        p-2 pb-3 rounded-3xl shadow-xl overflow-hidden
        flex flex-col
        cursor-pointer
        border-2 ${isSelected ? 'border-blue-600' : 'border-transparent'}
        hover:shadow-2xl
        hover:border-blue-400
        transition-all duration-200 ease-in-out
        ${isSelected ? 'scale-105 z-10' : 'scale-100'}
      `}
      onClick={onSelect}
    >
      <div className='relative h-56 md:h-64 bg-[var(--background-secondary)] rounded-3xl mb-2'>
        <img
          src={`/images/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className='object-cover w-full h-full rounded-3xl'
        />
        <div className='absolute top-3 left-3 bg-[var(--background-secondary)] text-[var(--text-primary)] text-xs font-semibold px-3 py-2 rounded-full'>
          {skip.size} Yards
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <span
            className={`inline-flex items-center gap-2 text-xs font-medium px-2 py-1 mt-2 rounded-md
            ${
              skip.allowed_on_road
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
            }`}
          >
            {skip.allowed_on_road ? <IoMdCheckmarkCircle className='w-5 h-5' /> : <IoMdWarning className='w-5 h-5' />}
            {skip.allowed_on_road ? 'Allowed On The Road' : 'Not Allowed On The Road'}
          </span>
          <h3 className='mt-2 text-base md:text-lg font-semibold text-[var(--text-primary)]'>{skip.size} Yard Skip</h3>
          <p className='mt-1 text-sm md:text-base text-[var(--text-secondary)]'>
            {skip.hire_period_days} day hire period
          </p>
        </div>

        <div className='mt-4 grid grid-cols-4 items-center gap-4'>
          <span className='col-span-1 text-xl font-bold text-[var(--accent-primary)]'>£{skip.price_before_vat}</span>
          <button
            className={`
              col-span-3 flex items-center justify-center space-x-1
              whitespace-nowrap min-w-[120px]
              ${
                isSelected
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--background-secondary)] text-[var(--text-primary)]'
              }
              px-3 py-2 rounded-3xl font-medium
              hover:${isSelected ? 'bg-[var(--accent-primary)]' : 'bg-[var(--background-secondary)]'}
              transition cursor-pointer
            `}
          >
            <span>{isSelected ? 'Selected' : 'Select This Skip'}</span>
            {!isSelected && <FaChevronRight className='w-4 h-4' />}
          </button>
        </div>
      </div>
    </div>
  );
}
