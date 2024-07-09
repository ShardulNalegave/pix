
import { ReactNode } from 'react';

export function Page({
  children,
  className,
} : {
  children: ReactNode,
  className?: string,
}) {
  return (
    <div className={`h-full w-full overflow-y-scroll overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
}