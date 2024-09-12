'use client';
import Form from '../components/Form';
import CategoriesBoard from '../components/CategoriesBoard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import RestaurantCard from '../components/RestaurantCard';
import { useState } from 'react';

const page = () => {
  const [restaurants, setRestaurants] = useState([
    {
      title: 'Restaurant 1',
      rating: 4.5,
      category: 'Italian',
      price: '$$$',
    },
    {
      title: 'Restaurant 2',
      rating: 3.2,
      category: 'Mexican',
      price: '$',
    },
    {
      title: 'Restaurant 3',
      rating: 4,
      category: 'Chinese',
      price: '$$',
    },
    {
      title: 'Restaurant 4',
      rating: 5,
      category: 'Japanese',
      price: '$$$',
    },
  ]);

  return (
    <div className="container mx-auto">
      <Form />
      <CategoriesBoard />
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <CarouselContent>
          {restaurants.map((restaurant, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <RestaurantCard {...restaurant} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default page;
