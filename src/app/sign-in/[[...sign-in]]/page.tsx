import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="absolute inset-0 mx-auto">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20 ">
        {/* <Link href="/" className={cn(buttonVariants({ variant: 'ghost' }))}>
          Home
        </Link> */}

        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  )
}
