import { Card, CardHeader } from "@chakra-ui/react";
import { Funnel, UserCircleGear } from "@phosphor-icons/react";
import Link from "next/link";

export function Sidebar() {
  const links = [
    {
      name: "Histórico de Sorteios",
      link: "/history-raffle",
      icon: <Funnel size={32} />,
    },
    {
      name: "Histórico de Ganhadores",
      link: "/history-winners",
      icon: <Funnel size={32} />,
    },
    {
      name: "Minha Conta",
      link: "/account",
      icon: <UserCircleGear size={32} />,
    },
    {
      name: "Termos de Serviço",
      link: "/terms-service",
      icon: <UserCircleGear size={32} />,
    },
    {
      name: "Sorteadores",
      link: "/raffle-maker",
      icon: <Funnel size={32} />,
    },
  ];

  return (
    <aside className="w-[250px] h-screen flex justify-center items-center">
      <Card className="h-[98vh] w-[95%] flex flex-col items-center">
        <CardHeader className="flex items-center italic gap-2">
          <Funnel size={24} />
          <h1 className="font-bold text-md">
            <Link href="/home-page">Sort App</Link>
          </h1>
        </CardHeader>
        <ul className="w-full flex flex-col px-4">
          {links.map((lk) => (
            <Link
              key={lk.name}
              href={lk.link}
              className="dark:hover:bg-gray-500 p-2 rounded-md flex items-center gap-2"
            >
              {lk.icon}
              <li>{lk.name}</li>
            </Link>
          ))}
        </ul>
      </Card>
    </aside>
  );
}
