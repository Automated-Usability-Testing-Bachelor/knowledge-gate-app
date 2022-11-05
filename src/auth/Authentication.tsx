import { Auth } from '@aws-amplify/auth'
import { Amplify } from '@aws-amplify/core'
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { config } from '../../config'
import { Empty } from '../types/empty'
import { dlog } from '../utils/dlog'
import { isTokenContainer } from './tokenContainerGuard'

Amplify.configure({
  Auth: {
    region: config.NEXT_PUBLIC_AWS_REGION,
    userPoolId: config.NEXT_PUBLIC_AWS_USER_POOL_ID,
    userPoolWebClientId: config.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
  },
})

type IAuthContext = {
  sessionToken: string | null
  updateSessionTokenUsingCognitoResponse: (cognitoResponse: unknown) => void
  cognitoSignOut: () => Promise<void>
}

const defaultState = {
  sessionToken: null,
  updateSessionTokenUsingCognitoResponse: () => {
    throw new Error('not implemented')
  },
  cognitoSignOut: () => {
    throw new Error('not implemented')
  },
}

const AuthenticationContext = createContext<IAuthContext>(defaultState)

export const AuthenticationProvider: React.FC<PropsWithChildren<Empty>> = ({
  children,
}) => {
  const [sessionToken, setSessionToken] = useState<string | null>(null)

  const updateSessionTokenUsingCognitoResponse = useCallback(
    (data: unknown | undefined) => {
      if (isTokenContainer(data)) {
        setSessionToken(data?.signInUserSession?.accessToken?.jwtToken ?? null)
      }
    },
    []
  )

  async function cognitoSignOut() {
    try {
      await Auth.signOut()
    } catch (error) {
      dlog('SignOut error', { extra: JSON.stringify(error) })
    }
  }

  const memoedValue = useMemo(
    () => ({
      sessionToken,
      updateSessionTokenUsingCognitoResponse,
      cognitoSignOut,
    }),
    [sessionToken, updateSessionTokenUsingCognitoResponse]
  )

  return (
    <AuthenticationContext.Provider value={memoedValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthenticationContext)
}
