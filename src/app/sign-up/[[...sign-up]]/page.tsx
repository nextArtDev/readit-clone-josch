import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h3>Please Sign up</h3>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}
