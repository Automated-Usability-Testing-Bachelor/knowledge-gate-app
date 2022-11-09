import { Auth } from '@aws-amplify/auth'
import { useCallback } from 'react'
import { GetViewerDocument, GetViewerQuery } from '../@generated/graphql'
import { instantiateApolloClient } from '../apollo-client/useApolloClient'
import { useAuth } from './Authentication'
import { isTokenContainer } from './tokenContainerGuard'

export const useAuthenticate = () => {
  const { updateSessionTokenUsingCognitoResponse } = useAuth()

  return useCallback(
    async (email: string, password: string) => {
      const user: unknown | undefined = await Auth.signIn(email, password)
      updateSessionTokenUsingCognitoResponse(user)

      const token = isTokenContainer(user)
        ? user?.signInUserSession?.accessToken?.jwtToken
        : null

      if (!token) {
        return
      }

      const apolloClient = instantiateApolloClient()

      const { data, error: viewerError } =
        await apolloClient.query<GetViewerQuery>({ query: GetViewerDocument })

        console.log({ data })

      if (viewerError) {
        throw viewerError
      } else if (!data.viewer.id) {
        throw new Error('Could not fetch user')
      }
    },
    [updateSessionTokenUsingCognitoResponse]
  )
}
