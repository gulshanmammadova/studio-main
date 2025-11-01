'use client';
import { Coffee } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex items-center space-x-4">
        <Coffee className="h-12 w-12 text-primary animate-bounce" />
        <span className="text-2xl font-headline text-primary tracking-widest">
          COFFEETEAM
        </span>
      </div>
      <p className="mt-4 text-muted-foreground">Menyu yüklənir...</p>
    </div>
  );
}
