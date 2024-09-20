import { db } from "@/app/_lib/prisma"
import BarbershopImage from "./_components/barbershop-image"
import { notFound } from "next/navigation"
import BarbershopDetails from "./_components/barbershop-details"
import ServiceItem from "@/app/_components/service-item"
import PhoneItem from "@/app/_components/phone-item"

interface BarbershopPageProps {
  params: {
    id: string
  },

  // searchParams: {
  //   search?: string
  // }


}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <BarbershopImage barbershop={barbershop} />

      <BarbershopDetails barbershop={barbershop} />

      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          contato
        </h2>
        {barbershop.phones.map((phone) => (
          <PhoneItem phone={phone} key={phone} />
        ))}
      </div>

      {/* {searchParams && searchParams.search && (
        <h1>Resultado da pesquisa: {searchParams.search}</h1>
      )} */}
    </div>
  )
}

export default BarbershopPage
