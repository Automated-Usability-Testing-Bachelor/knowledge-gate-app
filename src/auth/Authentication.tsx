import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
} from 'amazon-cognito-identity-js'
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

type SignInArgs = {
  username: string
  password: string
}

const cognitoSignIn = ({ username, password }: SignInArgs) => {
  const userData = {
    Username: username,
    Pool: new CognitoUserPool({
      UserPoolId: config.NEXT_PUBLIC_AWS_USER_POOL_ID,
      ClientId: config.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
    }),
  }

  const cognitoUser = new CognitoUser(userData)

  return new Promise<CognitoUserSession>((resolve, reject) => {
    cognitoUser.authenticateUser(
      new AuthenticationDetails({
        Username: username,
        Password: password,
      }),
      {
        onSuccess: resolve,
        onFailure: reject,
      }
    )
  })
}

type IAuthContext = {
  sessionToken: string | null
  cognitoSignOut: () => Promise<void>
  signIn: (args: SignInArgs) => Promise<void>
}

const defaultState = {
  sessionToken: null,
  signIn: () => {
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
  // const [initialLoading, setInitialLoading] = useState(true)

  const signIn = useCallback(async (args: SignInArgs) => {
    const { getAccessToken } = await cognitoSignIn(args)
    setSessionToken(getAccessToken().getJwtToken())
  }, [])

  const cognitoSignOut = useCallback(() => {
    dlog('cognitoSignOut')

    return Promise.resolve()
  }, [])

  const memoedValue = useMemo(
    () => ({
      sessionToken,
      cognitoSignOut,
      signIn,
    }),
    [cognitoSignOut, sessionToken, signIn]
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
