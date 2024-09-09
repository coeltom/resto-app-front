import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function Component() {
  return (
    <Card className="w-80">
      <CardContent className="p-0">
        <img
          src="/placeholder.svg?height=200&width=320"
          alt="Restaurant"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold">Delicious Bites</h2>
            <Badge variant="secondary" className="text-lg font-semibold">
              $$
            </Badge>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="font-semibold mr-2">4.5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span className="mr-2">Italian</span>
            <span>•</span>
            <span className="ml-2">Restaurant</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            18:00
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            19:30
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            21:00
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
