import { db } from "@/app/_lib/prisma"
import BarbershopImage from "./_components/barbershop-image"
import { notFound } from "next/navigation"
import BarbershopDetails from "./_components/barbershop-details"
import BarbershopServices from "@/app/_components/service-item"
import ServiceItem from "@/app/_components/service-item"
import ServiceList from "@/app/_components/service-list"

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
        include: {
            services: true,
        }

    })



    if (!barbershop) {
        return notFound()
    }

    return (

        <div>
            <BarbershopImage barbershop={barbershop} />

            <BarbershopDetails barbershop={barbershop} />

            <div className="p-5 space-y-3">
                <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service => <ServiceItem key={service.id} service={service} />))}
                </div>
            </div>
        </div>

    )
}

export default BarbershopPage
