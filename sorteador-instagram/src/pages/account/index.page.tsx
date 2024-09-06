import { GetServerSideProps } from 'next';
import { prisma } from '@/lib/prisma';
import { Funnel } from "@phosphor-icons/react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';

type UserProps = {
  user: {
    username: string;
    email: string;
    password: string;
    name: string | null;
  } | null; 
}

const AccountPage = ({ user }: UserProps) => {
  // Define grid template columns based on screen size
  const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' });

  return (
    <Flex h="100%" bg="#0e1621" color="white">
      <Box
        as="aside"
        h="59rem"
        w="250px"
        mt="11px"
        ml="8px"
        bg="#191e24"
        p="5"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="start"
      >
        <Flex alignItems="center" mb="20px" color="white">
          <Funnel size={32} />
          <Text ml="10px" fontSize="1.5rem" fontWeight="bold">
            <a href="/home-page">Sort App</a>
          </Text>
        </Flex>
        <Stack spacing="15px" align="start">
          <Text as="a" href="/history-raffle" className="text-white text-base mb-4 block p-2 cursor-pointer hover:bg-[#2c3e50] rounded-md">Historico de Sorteios</Text>
          <Text as="a" href="/history-winners" className="text-white text-base mb-4 block p-2 cursor-pointer hover:bg-[#2c3e50] rounded-md">Historico de Ganhadores</Text>
          <Text as="a" href="/terms-service" className="text-white text-base mb-4 block p-2 cursor-pointer hover:bg-[#2c3e50] rounded-md">Termos de Serviço</Text>
          <Text as="a" href="/raffle-maker" className="text-white text-base mb-4 block p-2 cursor-pointer hover:bg-[#2c3e50] rounded-md">Sorteadores</Text>
        </Stack>
      </Box>
      <Flex flexGrow="1" p="5" flexDirection="column" gap="5">
        <Box bg="#122233" p="5" borderRadius="8px">
          <Heading as="h2" mb="5" fontSize="24px" pb="2">
            Dados de Login
          </Heading>
          <VStack spacing="5" align="start">
            <Box w="full">
              <Text mb="1" color="#ccc">Nome Completo</Text>
              <Input value={user?.name ?? ''} isReadOnly bg="#1f3650" color="white" />
            </Box>
            <Box w="full">
              <Text mb="1" color="#ccc">Email</Text>
              <Input value={user?.email ?? ''} isReadOnly bg="#1f3650" color="white" />
            </Box>
            <Box w="full">
              <Text mb="1" color="#ccc">Senha</Text>
              <Input value={user?.password ?? ''} isReadOnly type="password" bg="#1f3650" color="white" />
            </Box>
            <Box w="full">
              <Text mb="1" color="#ccc">Usuário</Text>
              <Input value={user?.username ?? ''} isReadOnly bg="#1f3650" color="white" />
            </Box>
          </VStack>
        </Box>

        <Box bg="#122233" p="5" borderRadius="8px" display="grid" gap="5" gridTemplateColumns={gridTemplateColumns}>
          <Heading as="h2" mb="5" fontSize="24px" pb="2">
            Dados da Conta
          </Heading>
          <Box></Box>
            <Box>
              <Text mb="1" color="#ccc">Type</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">Provider</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">refresh_token</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">acess_token</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">expires_at</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">Token_type</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">Scope</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
            <Box>
              <Text mb="1" color="#ccc">session_state</Text>
              <Input bg="#1f3650" color="white" />
            </Box>
          </Box>
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: 'user@example.com',
    },
    select: {
      username: true,
      email: true,
      password: true,
      name: true,
    },
  });

  return {
    props: {
      user: user || null,
    },
  };
};

export default AccountPage;
