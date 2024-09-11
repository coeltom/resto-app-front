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

const page = () => {
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
          {[...Array(6)].map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <RestaurantCard />
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
