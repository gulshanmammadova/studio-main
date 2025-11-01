import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
       <Coffee className="h-6 w-6 text-primary" />
       <span className="text-xl font-bold font-headline tracking-widest text-primary">COFFEETEAM</span>
    </Link>
  );
}
