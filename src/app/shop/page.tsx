'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { shopItems, ShopItem } from '@/lib/data';
import placeholderImages from '@/lib/placeholder-images.json';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import bag1 from './../../assets/mehsullar/coffeeBag1kg.jpeg'
interface CartItem extends ShopItem {
  quantity: number;
}

export default function ShopPage() {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: ShopItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast({
      title: 'Səbətə əlavə olundu!',
      description: `${item.name} (${item.weight}) səbətinizə əlavə edildi.`,
    });
  };
  
  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== itemId);
      }
      return prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const clearCart = () => {
    setCart([]);
    toast({ title: 'Səbət boşaldıldı', description: 'Səbətiniz uğurla boşaldıldı.' });
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex justify-between items-center mb-12">
        <div className="text-center flex-grow">
          <h1 className="text-5xl md:text-7xl font-headline text-primary">Məhsullarımız</h1>
          <p className="text-lg text-muted-foreground mt-2 hidden md:block">
            Qəhvə sevgimizi evinizə gətirin.
          </p>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Səbət
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Səbətiniz</SheetTitle>
            </SheetHeader>
            <div className="mt-4 h-full flex flex-col">
              {cart.length === 0 ? (
                <p className="text-muted-foreground">Səbətiniz boşdur.</p>
              ) : (
                <>
                <Button 
                    className="w-full mb-4" 
                    disabled={cartTotal === 0} 
                    onClick={clearCart}
                    variant="destructive"
                  >
                    Səbəti boşalt
                  </Button>
                  <div className="flex-grow overflow-y-auto pr-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 mb-4">
                        <Image
                          src={bag1|| ''}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-md object-cover"
                        />
                        <div className="flex-grow">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.weight}</p>
                          <p className="text-sm font-medium">{item.price.toFixed(2)} AZN</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Cəmi:</span>
                      <span>{cartTotal.toFixed(2)} AZN</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map(item => {
           const itemImage = (placeholderImages as any)[item.image];
           return (
            <Card key={item.id} className="flex flex-col max-w-sm mx-auto">
              <CardHeader className="p-0">
                {itemImage && (
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={bag1}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint={itemImage.hint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-2xl font-headline text-primary mb-2">{item.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
              <CardFooter className="p-4 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg">{item.price.toFixed(2)} AZN</span>
                  <span className="text-muted-foreground text-sm ml-1">/ {item.weight}</span>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                   Səbətə at
                </Button>
              </CardFooter>
            </Card>
           );
        })}
      </div>
    </div>
  );
}
