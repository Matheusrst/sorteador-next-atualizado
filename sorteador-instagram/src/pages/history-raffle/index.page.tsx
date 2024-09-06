import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar'; // Certifique-se de que o caminho esteja correto

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
      <Sidebar />

      {/* Conteúdo principal */}
      <Flex flex="1" justifyContent="center" alignItems="center" p="5">
        <Box w="full" maxW="4xl">
          <Heading as="h1" size="xl" mb="5" textAlign="center" color="white">
            Histórico de Sorteios
          </Heading>
          <Box overflowX="auto">
            <table className="min-w-full bg-[#191e24] rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-[#2c3e50] text-white text-center">
                  <th className="w-80">Tipo</th>
                  <th className="p-4">Usuário</th>
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
