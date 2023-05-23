import { getMyProfile } from "./getMyProfile"

export async function getGreet() {
  const data = await getMyProfile()
  if (!data.name) {
    return `Hello, anonymous`
  }

  return `Hello ${data.name}!`
}
