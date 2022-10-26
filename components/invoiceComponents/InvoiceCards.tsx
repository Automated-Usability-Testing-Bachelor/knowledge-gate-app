import React from 'react'

import { View, FlatList } from 'react-native'
import invoices from '../../data/InvoicesData.json'
import InvoiceCard from './InvoiceCard'
import NoInvoicesItem from './NoInvoicesItem'

export type invoicesData = Invoice[]

export type Invoice = {
  id: number
  company: string
  currency: string
  raisedDate: string
  status: string
}

const renderItem = ({ item, index, separators }) => {
  return <InvoiceCard item={item} />
}

const InvoiceCards = () => {
  const data: invoicesData = invoices

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListEmptyComponent={<NoInvoicesItem />}
    />
  )
}

export default InvoiceCards
