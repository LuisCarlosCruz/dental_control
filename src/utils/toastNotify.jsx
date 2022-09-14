import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) =>
  toast.success(message, { position: 'top-center', autoClose: 2000 });

const notifyWarning = (message) =>
  toast.warning(message, { position: 'top-center', autoClose: 2000 });

const notifyError = (message) => toast.error(message, { position: 'top-center', autoClose: 2000 });

const ToastNotify = () => {
  return <ToastContainer />;
};

export { ToastNotify, notifySuccess, notifyWarning, notifyError };
