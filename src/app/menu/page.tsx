'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { menuItems, menuCategories } from '@/lib/data';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import placeholderImages from '@/lib/placeholder-images.json';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsByCategory = menuCategories.map(category => ({
    ...category,
    items: filteredItems.filter(item => item.category === category.id)
  })).filter(category => category.items.length > 0);

  const getPriceDisplay = (price: any) => {
    if (typeof price === 'object' && price !== null) {
      const definedPrices = Object.entries(price).filter(([, value]) => value !== 0 && value !== null);
      if (definedPrices.length === 1) {
        return <>{(definedPrices[0][1] as number).toFixed(2)} AZN</>;
      }
      return (
        <span className="text-sm flex flex-wrap gap-x-2 justify-end">
          {definedPrices.map(([size, value]) => (
            <span key={size} className="whitespace-nowrap">{size.toUpperCase()}:{(value as number).toFixed(2)}</span>
          ))}
          <span className='hidden sm:inline'>AZN</span>
        </span>
      );
    }
     if (typeof price === 'number') {
        return <>{price.toFixed(2)} AZN</>;
     }
    return <>{price}</>;
  };
  
  const hasBgImage = (categoryId: string) => ['hot-coffee', 'special-hot-coffee'].includes(categoryId);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-headline text-primary">Menyumuz</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-16 bg-background/90 py-4 z-40">
          <div className="w-full md:flex-grow">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
                className="flex-shrink-0"
              >
                Hamısı
              </Button>
              {menuCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex-shrink-0"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto md:max-w-xs relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ad ilə axtar..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {activeCategory === 'all' ? (
          itemsByCategory.map(category => (
            <div key={category.id} className="mb-12">
               <div className={cn("text-center mb-8 p-8 rounded-lg relative overflow-hidden", { 'text-white': hasBgImage(category.id) })}>
                    {/* {hasBgImage(category.id) && (
                      <>
                        <Image 
                           src={(placeholderImages.menuHeader as any)[category.id === 'hot-coffee' ? 'coffee' : 'special-coffee' ].imageUrl}
                           alt={category.name}
                           fill
                           className="object-cover"
                        />
                         <div className="absolute inset-0 bg-black/50" />
                      </>
                    )} */}
                    {/* <h2 className={cn("text-4xl md:text-5xl font-headline text-primary relative", { 'text-white': hasBgImage(category.id) })}>{category.name}</h2> */}
                    <h2 className={cn("text-4xl md:text-5xl font-headline text-primary relative text-white" )}>{category.name}</h2>
              
               </div>
              <div className="space-y-4">
                {category.items.map(item => (
                  <div key={item.id} className="flex items-baseline">
                    <span className="font-headline text-foreground text-lg">{item.name}</span>
                    <span className="menu-item-line"></span>
                    <span className="font-bold text-foreground text-lg whitespace-nowrap">{getPriceDisplay(item.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
           <div className="space-y-4">
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                <div key={item.id} className="flex items-baseline">
                  <span className="font-headline text-foreground text-lg">{item.name}</span>
                  <span className="menu-item-line"></span>
                  <span className="font-bold text-foreground text-lg whitespace-nowrap">{getPriceDisplay(item.price)}</span>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground text-lg">Axtarışınıza uyğun məhsul tapılmadı.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
