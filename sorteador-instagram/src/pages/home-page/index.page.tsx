import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
  return (
    <Flex h="100vh" bg="#0b0f18">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Flex flexGrow="1" p="10" flexDirection="column" gap="5">
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Minha Conta
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os Detalhes Da sua conta
          </Text>
          <Text as="a" href="/account" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Histórico de Sorteios
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os sorteios realizados
          </Text>
          <Text as="a" href="/history-raffle" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Histórico de Ganhadores
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os ganhadores dos sorteios
          </Text>
          <Text as="a" href="/history-winners" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Termos de uso
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os termos de uso e regras para os sorteios
          </Text>
          <Text as="a" href="/terms-service" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
