import { db } from "../_lib/prisma";
import ServiceItem from "./service-item";


const ServiceList = async () => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: "ckq42863e0000418000000001",
        },
    });

    return (
        <>
            <div className="p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
            </div>

            <h1>{barbershop.services.map((service) => (
                <ServiceItem key={service.id} service={service} />
            ))}</h1>

        </>

    );
}

export default ServiceList;