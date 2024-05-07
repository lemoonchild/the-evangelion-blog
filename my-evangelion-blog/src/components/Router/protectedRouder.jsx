import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/autProvider.jsx'

export default function ProtectedRoute({ children, roles }) {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  const hasRequiredRole = roles.includes(user.role)

  if (!hasRequiredRole) {
    return <Navigate to="/login" />
  }

  return children
}
