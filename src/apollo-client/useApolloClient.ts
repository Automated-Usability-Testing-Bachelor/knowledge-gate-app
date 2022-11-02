/* eslint-disable no-console */
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Auth } from '@aws-amplify/auth'
import { useMemo } from 'react'

export const instantiateApolloClient = () => {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext(async (_, { headers }: { headers: object }) => {
    try {
      const session = await Auth.currentSession()
      const token = session.getAccessToken().getJwtToken()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    } catch (error) {
      if (error !== 'No current user') {
        console.log('authLink error: ', { extra: JSON.stringify(error) })
      }

      return {
        headers
      }
    }
  })

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache()
  })
}

export const useApolloClient = () => {
  return useMemo(instantiateApolloClient, [])
}
