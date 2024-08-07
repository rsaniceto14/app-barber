import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Raphael!</h2>
        <p>Quarta-feira, 07 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="banner01"
            src="/banner-01wl.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Home
