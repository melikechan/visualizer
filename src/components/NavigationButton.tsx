import React from 'react';
import Link from 'next/link';

interface NavigationButtonProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export default function NavigationButton({ href, className, ariaLabel, children, ...props }: NavigationButtonProps) {
  return (
    <Link 
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 text-white bg-melikechan-pink dark:bg-melikechan-purple
        rounded-full hover:opacity-90 transition-opacity ${className || ''}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
}
