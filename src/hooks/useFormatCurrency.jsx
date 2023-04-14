import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrency } from '../pages/admin/dashboard/api/propertiesSlice'

const useFormatCurrency = (property) => {
  const [formattedCurrency, setFormattedCurrency] = useState(null)
  const currency = useSelector(selectCurrency)

  useEffect(() => {
    switch (currency) {
      case `NGN`:
        setFormattedCurrency(`₦${property?.NGN}`)
        break
      case `GBP`:
        setFormattedCurrency(`£${property?.GBP}`)
        break
      case `USD`:
        setFormattedCurrency(`$${property?.USD}`)
        break
      default:
        setFormattedCurrency(`₦${property?.price}`)
        break
    }
  }, [currency, property?.GBP, property?.NGN, property?.USD, property?.price])

  return { formattedCurrency: formattedCurrency }
}

export default useFormatCurrency
