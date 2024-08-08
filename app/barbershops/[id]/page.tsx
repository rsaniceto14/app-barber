import { db } from "@/app/_lib/prisma"
import BarbershopImage from "./_components/barbershop-image"
import { notFound } from "next/navigation"
import BarbershopDetails from "./_components/barbershop-details"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <BarbershopImage barbershop={barbershop} />

      <BarbershopDetails barbershop={barbershop} />
    </div>
  )
}

export default BarbershopPage
