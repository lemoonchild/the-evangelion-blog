import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './notification.css'

const NotificationManager = {
  notify: (message, type) => {
    switch (type) {
      case 'success':
        toast.success(message, { position: 'top-right', autoClose: 5000 })
        break
      case 'error':
        toast.error(message, { position: 'top-right', autoClose: 5000 })
        break
      default:
        toast.info(message, { position: 'top-right', autoClose: 5000 })
        break
    }
  }
}

export const ToastNotification = () => {
  return <ToastContainer />
}

export default NotificationManager
