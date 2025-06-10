import {
  FaMapMarkerAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaClipboardCheck,
  FaCalendarAlt,
  FaRegCreditCard,
} from 'react-icons/fa';

export const BOOKING_STEPS_CONFIG = [
  { id: 'postcode', label: 'Postcode', Icon: FaMapMarkerAlt },
  { id: 'wasteType', label: 'Waste Type', Icon: FaBoxOpen },
  { id: 'selectSkip', label: 'Select Skip', Icon: FaTruckMoving },
  { id: 'permitCheck', label: 'Permit Check', Icon: FaClipboardCheck },
  { id: 'chooseDate', label: 'Choose Date', Icon: FaCalendarAlt },
  { id: 'payment', label: 'Payment', Icon: FaRegCreditCard },
];

export const getStepIndexById = (id) => BOOKING_STEPS_CONFIG.findIndex((step) => step.id === id);
