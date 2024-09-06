import { GetServerSideProps } from 'next';
import { prisma } from '@/lib/prisma';
import { Sidebar } from '@/components/sidebar';
import { Box, Flex, Heading, Input, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

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
    <Flex h="100vh" bg="#0e1621" color="white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
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
