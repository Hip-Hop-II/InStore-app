import {Google, Constants} from 'expo'

const scopes = ['profile', 'email']

const loginAsync = async () => {
  try {
    const { type, accessToken } = await Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClientId: Constants.manifest.extra.googleAppId.ios
    });
    if (type === 'success') {
      return Promise.resolve(accessToken)
    }
    return Promise.reject('No success!')
  } catch (error) {
    return Promise.reject(error)
  }
}


export const GoogleApi = {
  loginAsync
}
