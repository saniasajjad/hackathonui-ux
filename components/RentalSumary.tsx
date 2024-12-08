import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface RentalSummaryProps {
  carName: string
  carImage: string
  rating: number
  reviewCount: number
  subtotal: number
  tax: number
}

export default function RentalSummary({
  carName = "Nissan GT-R",
  carImage = "/placeholder.svg",
  rating = 4,
  reviewCount = 440,
  subtotal = 80.0,
  tax = 0,
}: RentalSummaryProps) {
  const totalPrice = subtotal + tax

  return (
    <Card className="w-full rounded-xl border-none bg-white">
      <CardHeader className="space-y-2">
        <h2 className="text-2xl font-semibold">Rental Summary</h2>
        <p className="text-sm text-gray-400">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Car Preview */}
        <div className="flex items-start space-x-4">
          <div className="relative h-24 w-32 overflow-hidden rounded-lg">
            <Image
              src={carImage}
              alt={carName}
              fill
              className="object-contain p-2 w-full"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{carName}</h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < rating ? "fill-yellow-300 text-yellow-300" : "fill-muted text-muted"
                  )}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {reviewCount}+ Reviewer
              </span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="relative">
          <Input
            placeholder="Apply promo code"
            className="w-full rounded-lg border-none bg-gray-100 pl-4 placeholder:text-gray-500"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-900 hover:text-gray-700">
            Apply now
          </button>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-6">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="space-y-1">
              <h4 className="text-lg font-semibold">Total Rental Price</h4>
              <p className="text-sm text-gray-400">
                Overall price and includes rental discount
              </p>
            </div>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
