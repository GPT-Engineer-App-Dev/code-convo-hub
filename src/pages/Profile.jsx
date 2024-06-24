import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>User Profile</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Username: tech_guru</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Posts: 42</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;