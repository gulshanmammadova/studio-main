import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          <div className="space-y-4 max-w-xs">
             <Logo />
            <p className="text-muted-foreground">
              Dadlı anların və keyfiyyətli qəhvənin tək ünvanı.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Səhifələr</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Ana Səhifə</Link></li>
              <li><Link href="/menu" className="text-muted-foreground hover:text-primary">Menyu</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Məhsullar</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Əlaqə</Link></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Faydalı Linklər</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Gizlilik Siyasəti</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Şərtlər və Qaydalar</a></li>
            </ul>
          </div> */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Bizi İzləyin</h3>
            <div className="flex justify-center space-x-4">
              <Link href="https://www.instagram.com/coffeeteambaku?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} COFFEETEAM. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}
