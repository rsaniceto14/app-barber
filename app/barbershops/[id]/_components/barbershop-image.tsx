"use client"

import { Button } from "@/app/_components/ui/button"
import { Barbershop } from "@prisma/client"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface BarbershopImageProps {
  barbershop: Pick<Barbershop, "name" | "imageUrl">
}

const BarbershopImage = ({ barbershop }: BarbershopImageProps) => {
  const router = useRouter()

  const handleBackClick = () => router.back()

  return (
    <div className="relative h-[250px] w-full">
      <Image
        alt={barbershop.name}
        src={barbershop?.imageUrl}
        fill
        className="object-cover"
      />

      <Button
        className="absolute left-4 top-4 rounded-full"
        size="icon"
        onClick={handleBackClick}
        variant="outline"
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        className="absolute right-4 top-4 rounded-full"
        size="icon"
        // onClick={handleBackClick}
        variant="outline"
      >
        <MenuIcon />
      </Button>
    </div>
  )
}

export default BarbershopImage
