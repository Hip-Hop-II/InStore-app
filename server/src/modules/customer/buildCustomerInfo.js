export const buildCustomerInfo = (info, providerName) => {
  let user = {
    email: '',
    firstName: '',
    lastName: '',
    avatarUrl: '',
    provider: {
      uid: '',
      type: ''
    }
  }

  if (providerName === 'GOOGLE') {
    user.provider.uid = info.id
    user.provider.type = providerName
    user.email = info.email
    user.firstName = info.given_name
    user.lastName = info.family_name
    user.avatarUrl = info.picture
  } else if (providerName === 'FACEBOOK') {
    const [firstName, ...lastName] = info.name.split(' ')
    user.firstName = firstName
    user.lastName = lastName
    user.provider.uid = info.id
    user.avatarUrl = info.picture.data.url
    user.email = info.email
    user.provider.type = providerName
  }
  return user
}
