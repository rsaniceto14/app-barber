import { Prisma } from "@prisma/client"
import { MapPinIcon, StarIcon } from "lucide-react"

interface BarbershopDetailsProps {
  barbershop: Prisma.BarbershopGetPayload<{
    include: {
      services: true
    }
  }>
}

const BarbershopDetails = ({ barbershop }: BarbershopDetailsProps) => {
  return (
    <>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0 (899 avaliações)</p>
        </div>
      </div>
      <div className=" space-y-2 border-b border-solid p-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Sobre nós
        </h2>
        <p>{barbershop.description}</p>
      </div>

    </>
  )
}

export default BarbershopDetails
