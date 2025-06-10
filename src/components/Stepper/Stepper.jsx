import React, { useRef, useEffect } from 'react';
import styles from './Stepper.module.scss';

const Stepper = ({ steps = [], currentStep = 0 }) => {
  const stepRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 700 && stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentStep]);

  return (
    <div
      className={styles.stepperContainer}
      role='progressbar'
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
    >
      {steps.map(({ id, label, Icon }, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        const stepClass = [styles.step, isCompleted && styles.completed, isActive && styles.active]
          .filter(Boolean)
          .join(' ');

        const connectorClass = [styles.connector, index < currentStep && styles.connectorActive]
          .filter(Boolean)
          .join(' ');

        return (
          <React.Fragment key={id}>
            <div className={stepClass} ref={(el) => (stepRefs.current[index] = el)}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconBackground}>
                  <Icon className={styles.icon} />
                </div>
              </div>
              <div className={styles.label}>{label}</div>
            </div>
            {index < steps.length - 1 && <div className={connectorClass} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
