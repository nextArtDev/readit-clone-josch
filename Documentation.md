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
...

---

## Intercepting a page
for example we want to go from '/' to '/sign-in' but we want it to be modal not a page, and only after hard reloading it converts to a page:
"@" is convention to how we create this intercepting in parallel routes: src/app/@authModal.
we define a _default.tsx_ determines what should be shown from this component if no route is able to be intercept.
if we dont want to show anything:
src/app/@authModal/default.tsx
```js
export default function Default(){
  return null
}
```
we should recieve it as property in our _layout_ if we have 
```js
export default function RootLayout({
  children, authModal}:{
    children: React.ReactNode
    authModal: React.ReactNode
  }
)
return(
  ...
  {authModal}
)
```
**(.)sign-in**
now we should define what we want to intercept to?
whenever we call _sign-in_ route, we're intercepting the authModal and can costume define it by page.tsx:
_app/@authModal/(.)sign-in/page.tsx_