import { ApolloProvider } from '@apollo/client'
import React, { PropsWithChildren } from 'react'
import { useApolloClient } from '../src/apollo-client/useApolloClient'
import { Empty } from '../src/types/empty'

export const ApolloWrapper: React.FC<PropsWithChildren<Empty>> = ({
  children
}) => {
  const apolloClient = useApolloClient()

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
