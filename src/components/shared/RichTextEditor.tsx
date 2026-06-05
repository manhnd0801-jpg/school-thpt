import type { ReactNode } from 'react';

export default function SharedPlaceholder({ children }: { children?: ReactNode }) {
  return <>{children ?? null}</>;
}
