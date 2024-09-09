'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-background shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <Link href="#" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
              />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
