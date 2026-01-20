import { useState } from 'react'

/**
 * Custom hook to manage form input state
 * @param {string} initialValue - The initial value for the input
 * @returns {Object} - Returns { value, onChange, reset, setValue }
 */
export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return {
    value,
    onChange: handleChange,
    reset,
    setValue
  }
}
