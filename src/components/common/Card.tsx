import * as React from 'react'

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='mt-24 flex min-w-screen flex-col items-center justify-between rounded-lg border shadow-sm'
        {...props}
    />
))
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='space-y-1.5 p-6 px-2 sm:px-4'
        {...props}
    />
))
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='text-lg text-center font-semibold leading-none tracking-tight'
        {...props}
    />
))
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='text-sm'
        {...props}
    />
))
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='p-6 pt-0 px-2 sm:px-4'
        {...props}
    />
))
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        className='p-6 pt-0 px-2 sm:px-4'
        {...props}
    />
))
CardFooter.displayName = "CardFooter";

export { Card, CardTitle, CardHeader, CardContent, CardDescription, CardFooter}