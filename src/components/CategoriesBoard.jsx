import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  Code,
  Cog,
  FileText,
  Gamepad2,
  Music,
  PenTool,
  Video,
} from 'lucide-react';

const categories = [
  { name: 'Destacados' },
  { name: 'Bares' },
  { name: 'Empanadas' },
  { name: 'Pizza' },
  { name: 'Romantico' },
  { name: 'Asiatico' },
  { name: 'Vinos' },
  { name: 'Grupos' },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map(category => (
          <Card
            key={category.name}
            className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <h3 className="text-sm font-medium text-center">
                {category.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
