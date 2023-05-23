export type Profile = {
  id: string
  name: string
  age: number
  email: string
}

export const getMyProfile = async (): Promise<Profile> => {
  const response = await fetch("https://my.api.mockaroo.com/profile")
  const profile = await response.json()
  if (!profile.ok) {
    throw profile
  }
  return profile
}
