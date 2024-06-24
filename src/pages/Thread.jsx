import { Box, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";

const Thread = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Thread Title</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>User1: This is a comment.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>User2: This is another comment.</Text>
        </Box>
      </VStack>
      <Box mt={4}>
        <Input placeholder="Write a comment..." mb={2} />
        <Button colorScheme="blue">Post Comment</Button>
      </Box>
    </Box>
  );
};

export default Thread;