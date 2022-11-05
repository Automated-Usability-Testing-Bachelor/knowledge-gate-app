export type CognitoUser = {
  signInUserSession?: {
    accessToken?: {
      jwtToken?: string
    }
  }
  email: string
} | null

export const isTokenContainer = (
  obj: unknown | undefined
): obj is CognitoUser =>
  !!(obj as CognitoUser)?.signInUserSession?.accessToken?.jwtToken
