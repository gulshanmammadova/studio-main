'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import placeholderImages from '@/lib/placeholder-images.json';
// import { galleryImages } from '@/lib/data';
import MyVideo from '../assets/home/video/vecteezy_coffee-beans-coffee-flying-brown_19080887_980.mp4';
import BaristaImg from '../assets/home/qalerya/qalerya-1 (1).png';
import { ArrowRight, Coffee, Award, Smile } from 'lucide-react';
import qalerya1 from '../assets/home/qalerya/barista-1.png';
import qalerya2 from '../assets/home/qalerya/qalerya-1 (1).png';
import qalerya3 from '../assets/home/qalerya/qalerya-2.png';
import qalerya4 from '../assets/home/qalerya/qalerya-3.png'
import { babelIncludeRegexes } from 'next/dist/build/webpack-config';
export default function Home() {
let galeryImages=[qalerya1,qalerya2,qalerya3,qalerya4];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/assets/home/video/vecteezy_coffee-beans-coffee-flying-brown_19080887_980.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline tracking-tight">
            Dadlı Anların Məkanı
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            Bakının mərkəzində keyfiyyətli qəhvə, ləzzətli şirniyyatlar və rahat atmosferin mükəmməl birləşməsi.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/menu">Menyuya Baxın</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-headline text-primary">Niyə COFFEETEAM?</h2>
            </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-auto md:mx-0">
                {/* <Image
                    src={placeholderImages.aboutUs.imageUrl}
                    alt="Barista"
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImages.aboutUs.hint}
                /> */}
            <Image
              src={BaristaImg}
              alt="Barista"
              fill
              className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                 COFFEETEAM, qəhvəyə olan sevgimizi və keyfiyyət anlayışımızı paylaşmaq üçün quruldu. Hər bir fincan qəhvəmizdə, səmimiyyətimizi və peşəkarlığımızı hiss edəcəksiniz. Məqsədimiz sadəcə qəhvə təqdim etmək deyil, həm də insanların bir araya gəlib gözəl anlar paylaşdığı bir məkan yaratmaqdır.
              </p>
            </div>
          </div>
           <div className="grid sm:grid-cols-3 gap-8 text-left mt-16">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary rounded-full">
                <Coffee className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline mb-1">Seçilmiş Dənələr</h3>
                <p className="text-muted-foreground">
                  Dünyanın ən yaxşı plantasiyalarından seçilmiş 100% Arabica dənələri.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary rounded-full">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
               <div>
                <h3 className="text-xl font-bold font-headline mb-1">Usta Baristalar</h3>
                <p className="text-muted-foreground">
                  Qəhvənizi sevgi və peşəkarlıqla hazırlayan təcrübəli komandamız.
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="p-3 bg-primary rounded-full">
                <Smile className="h-6 w-6 text-primary-foreground" />
              </div>
               <div>
                <h3 className="text-xl font-bold font-headline mb-1">Unudulmaz Atmosfer</h3>
                <p className="text-muted-foreground">
                  Dostlarla görüşmək və dincəlmək üçün ideal, rahat mühit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Menu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Menyumuzu Kəşf Edin</h2>
            <p className="mt-2 text-lg text-muted-foreground mb-8">Hər zövqə uyğun isti və soyuq içkilər, şirniyyatlar və daha çoxu.</p>
            <Button asChild size="lg">
              <Link href="/menu">Tam Menyu <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Qalereya</h2>
            <div className="mt-4 text-xl text-muted-foreground italic">
                <p>"Həyat bir fincan qəhvə kimidir, bəzən acı, bəzən şirin, amma hər zaman hərarətli."</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galeryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group shadow-lg">
                <Image
                  src={image}
                  alt={'Gallery image ' + (index + 1)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// data-ai-hint={image.hint}