import { Box, Flex, Text, VStack, Heading, Image, Input, Textarea, Button, useColorModeValue, Container } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <VStack spacing={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5NTk4NDI0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Demilade" />
          <Heading as="h1" size="2xl" color={textColor}>
            Demilade
          </Heading>
          <Text fontSize="xl" color={textColor}>
            A Passionate Programmer from Nigeria
          </Text>
          <Flex align="center" justify="center">
            <Button as="a" href="https://github.com" leftIcon={<FaGithub />} m={2}>
              GitHub
            </Button>
            <Button as="a" href="https://linkedin.com" leftIcon={<FaLinkedin />} m={2}>
              LinkedIn
            </Button>
          </Flex>
        </VStack>
      </Flex>

      <Container maxW="container.md" py={10}>
        <Heading as="h2" size="lg" mb={5} color={textColor}>
          Technologies
        </Heading>
        <Flex wrap="wrap" justify="center" gap={4}>
          <Box p={5} bg={bgColor} borderRadius="md">
            <Text fontSize="xl" color={textColor}>
              AngularJS
            </Text>
          </Box>
          <Box p={5} bg={bgColor} borderRadius="md">
            <Text fontSize="xl" color={textColor}>
              Node.js
            </Text>
          </Box>
          <Box p={5} bg={bgColor} borderRadius="md">
            <Text fontSize="xl" color={textColor}>
              MySQL
            </Text>
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.md" py={10}>
        <Heading as="h2" size="lg" mb={5} color={textColor}>
          Message Me
        </Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button rightIcon={<FaEnvelope />} colorScheme="blue">
            Send Message
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
