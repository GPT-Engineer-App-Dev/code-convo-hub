import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Forum = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Forum</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md">Thread Title 1</Heading>
          <Text mt={2}>This is a brief description of the thread.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md">Thread Title 2</Heading>
          <Text mt={2}>This is a brief description of the thread.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Forum;