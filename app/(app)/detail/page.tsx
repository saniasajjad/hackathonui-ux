import CarInfo from "@/components/CarInfo"
import CarReviews from "@/components/CarReviews"
import CategorySidebar from "@/components/CategorySidebar"
import CustomCarousel from "@/components/carousel"
import { generateImage } from "@/lib/imageGenerator"

const images = [
  {
    src: "/images/image_1.jpg",
    alt: "Car image 1",
  },
  {
    src: "/images/image_2.jpg",
    alt: "Car image 2",
  },
  {
    src: "/images/image_3.jpg",
    alt: "Car image 3",
  },
]

export default function CarDetails() {
  return (
    <div className="flex min-h-screen bg-background">
      <CategorySidebar className="hidden lg:block w-64 flex-shrink-0" />
      <main className="flex-grow p-6 space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <CustomCarousel images={images} />
          </div>
          <div>
            <CarInfo />
          </div>
        </div>
        <CarReviews />
      </main>
    </div>
  )
}
