##twMerge  or Tailwind Merge
Comines tailwind classes optimally together
if we have _my-2_ and _mx-2_ it merges them to: _m-2_

```typescript
export function cn(...inputs: ClassValue[]) {
    //clsx is for conditional classnames
  return twMerge(clsx(inputs))
}

//Using that
<html 
className={cn('bg-white text-slate-900 antialiased light'), inter.className}
>
```

## h-fit
matching the content for the container

## container
automatically applies some margin and padding, that we can extend it too.

# Clerk
