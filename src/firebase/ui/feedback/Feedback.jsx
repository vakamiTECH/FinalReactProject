import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../../store';

function Feedback() {
  const { show, type, msg } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.closeAlert());
  };

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        dispatch(uiActions.closeAlert());
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show, dispatch]);

  let bgColor = '';
  let textColor = '';
  switch (type) {
    case 'error':
      bgColor = 'bg-error';
      textColor = 'text-primary';
      break;
    case 'success':
      bgColor = 'bg-success';
      textColor = 'text-primary';
      break;
    case 'info':
      bgColor = 'bg-info';
      textColor = 'text-primary';
      break;
    default:
      break;
  }

  return show ? (
    <div className="flex justify-center">
      <div
        className={`message ${bgColor} ${textColor} border p-2 mt-2 rounded-xl border-${type}-300`}
        role="alert"
      >
        <p>{msg}</p>
        <button
          type="button"
          className={`${textColor} hover:text-${type}-800 font-bold`}
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    </div>
  ) : null;
}

export default Feedback;
