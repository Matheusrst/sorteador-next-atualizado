import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar'; // Certifique-se de que o caminho esteja correto

export default function TermosDeUso() {
  return (
    <Flex h="100vh" bg="#0b0f18">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Flex flexGrow="1" p="10" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1" color="white" mb="5" fontSize="3xl">
          Termos de Uso
        </Heading>
        <Box
          bg="#2e2f32"
          p="5"
          borderRadius="8px"
          maxW="5xl"
          color="white"
          fontSize="lg"
          lineHeight="relaxed"
        >
          <Text>
            Estes são os termos de uso do nosso serviço. Por favor, leia
            cuidadosamente antes de utilizar o nosso aplicativo. Ao utilizar o
            aplicativo, você concorda em seguir estes termos e condições.
          </Text>
          <Text mt="4">
            1. O uso do aplicativo é permitido apenas para fins legais e
            legítimos.
          </Text>
          <Text mt="4">
            2. O usuário é responsável por todas as atividades realizadas no
            aplicativo através de sua conta.
          </Text>
          <Text mt="4">
            3. A reprodução não autorizada de qualquer conteúdo disponível no
            aplicativo é proibida.
          </Text>
          {/* Adicione mais termos conforme necessário */}
        </Box>
      </Flex>
    </Flex>
  );
}
