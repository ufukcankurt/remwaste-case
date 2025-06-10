import React, { useState, useEffect, useCallback } from 'react';
import styles from './SkipSelection.module.scss';
import axios from 'axios';
import Stepper from '../../components/Stepper/Stepper';
import { BOOKING_STEPS_CONFIG, getStepIndexById } from '../../config/bookingConfig.jsx';
import SkipCard from '../../components/SkipCard/SkipCard';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { useWindowSize } from '../../hooks/useWindowSize';
import Loading from '../../components/Loading/Loading';

const FETCH_SKIP_LIST = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

function SkipSelection() {
  const [skipList, setSkipList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const { width } = useWindowSize();

  const currentBookingStep = getStepIndexById('selectSkip');
  const isMobile = width < 768;

  useEffect(() => {
    const fetchSkipList = async () => {
      try {
        setLoading(true);
        const response = await axios.get(FETCH_SKIP_LIST);
        setSkipList(response.data);
      } catch (error) {
        console.error('Error fetching skip list:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkipList();
  }, []);

  const handleSelectSkip = useCallback((skip) => {
    setSelectedSkip((prev) => (prev?.id === skip.id ? null : skip));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={`${styles.container} px-6 pb-12 ${isMobile ? 'pb-48' : ''}`}>
          <div className='w-full'>
            <Stepper steps={BOOKING_STEPS_CONFIG} currentStep={currentBookingStep} />

            <div className='text-center my-2 md:my-8'>
              <h1 className='text-2xl md:text-3xl font-semibold mb-1 text-[var(--text-primary)]'>
                Choose Your Skip Size
              </h1>
              <p className='text-sm md:text-base mb-8 text-[var(--text-secondary)]'>
                Select the skip size that best suits your needs
              </p>
            </div>

            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-12 md:col-span-8 lg:col-span-9'>
                <div className='grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {skipList.map((skip) => (
                    <SkipCard
                      key={skip.id}
                      skip={skip}
                      isSelected={selectedSkip?.id === skip.id}
                      onSelect={() => handleSelectSkip(skip)}
                    />
                  ))}
                </div>
              </div>

              {/* Summary */}
              {(!isMobile || selectedSkip) && (
                <div className='col-span-12 md:col-span-4 lg:col-span-3'>
                  <SummaryCard selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SkipSelection;
