import { ApolloProvider } from '@apollo/client'
import React, { PropsWithChildren } from 'react'
import { useApolloClient } from '../src/apollo-client/useApolloClient'

export const ApolloWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const apolloClient = useApolloClient()

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
