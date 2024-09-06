import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Funnel } from '@phosphor-icons/react';

interface Raffle {
  id: string;
  type: string;
  sorted_value: string;
  sort_date: string;
}

export default function HistoricoGanhadores() {
  const [raffles, setRaffles] = useState<Raffle[]>([]);

  useEffect(() => {
    async function fetchRaffles() {
      try {
        const response = await fetch('/api/raffles/save.api');
        const data = await response.json();

        if (Array.isArray(data)) {
          setRaffles(data);
        } else {
          console.error('Dados retornados não são um array');
        }
      } catch (error) {
        console.error('Erro ao buscar os sorteios:', error);
      }
    }

    fetchRaffles();
  }, []);

  return (
    <Flex h="100vh" bg="#0b0f18">
      {/* Sidebar */}
      <Box
        as="aside"
        h="100%"
        w="64"
        bg="#191e24"
        p="5"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="start"
        color="white"
      >
        <Flex alignItems="center" mb="5" color="white">
          <Funnel size={32} />
          <Text ml="2" fontSize="2xl" fontWeight="bold">
            <a href="/home-page">Sort App</a>
          </Text>
        </Flex>

        <VStack spacing="4" align="start">
          <Text as="a" href="/history-raffle" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Histórico de Sorteios
          </Text>
          <Text as="a" href="/history-winners" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Histórico de Ganhadores
          </Text>
          <Text as="a" href="/account" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Minha Conta
          </Text>
          <Text as="a" href="/terms-service" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Termos de Serviço
          </Text>
          <Text as="a" href="/raffle-maker" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Sorteadores
          </Text>
        </VStack>
      </Box>

      {/* Conteúdo principal */}
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Box w="full" maxW="4xl" p="5">
          <Heading as="h1" size="xl" mb="5" textAlign="center" color="white">
            Histórico de Ganhadores
          </Heading>
          <Box overflowX="auto">
            <table className="min-w-full bg-[#191e24] rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-[#2c3e50] text-white text-center">
                  <th className="w-80">Tipo</th>
                  <th className="p-4">Vencedor</th>
                  <th className="p-3">Data do Sorteio</th>
                </tr>
              </thead>
              <tbody>
                {raffles.length > 0 ? (
                  raffles.map((raffle) => (
                    <tr key={raffle.id} className="border-b border-gray-700">
                      <td className="w-80 text-center">{raffle.type}</td>
                      <td className="p-4 text-center">{raffle.sorted_value}</td>
                      <td className="p-3 text-center">
                        {new Date(raffle.sort_date).toLocaleDateString('pt-BR')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center p-4">
                      Nenhum sorteio encontrado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
