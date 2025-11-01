'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-headline text-primary">Bizimlə Əlaqə</h1>
        <p className="text-lg text-muted-foreground mt-2">Sizi məkanımızda görməyə şad olarıq.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary"/>
                Məkanımız
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">Baki şəhəri, Xətai rayonu
Seyid Əzim Şirvani küc, giriş 51</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary"/>
                İş Saatları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-lg">
                <li>Bazar ertəsi - Bazar: 07:30 - 00:00</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary"/>
                Əlaqə Nömrəsi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">+994 (77) 308 08 82</p>
            </CardContent>
          </Card>
        </div>

        <Card className="h-full min-h-[400px] md:min-h-0">
          <CardContent className="p-0 h-full rounded-lg overflow-hidden">
            <iframe
              src=""
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
