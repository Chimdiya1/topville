import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';
import { Link as rrdLink } from 'react-router-dom';

import Container from '../container';

const MobileNav = ({ removeNavbarHandler, mobileNavOpen }) => {
  return (
    <Box
      position="fixed"
      zIndex="10"
      top="0"
      left="0"
      height="100vh"
      width="100%"
      backgroundColor="white"
      d={mobileNavOpen ? 'block' : 'none'}
    >
      <Container>
        <Flex mb="3rem" justify="space-between" align="center" mt={6}>
          <Link
            onClick={removeNavbarHandler}
            as={rrdLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
            position="relative"
          >
            <Image
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
              alt="Logo"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/brand_logo.png"
            />
          </Link>
          <Box
            position="relative"
            onClick={removeNavbarHandler}
            cursor="pointer"
            d={{ base: 'block', md: 'none' }}
          >
            <Box
              position="absolute"
              transform="rotate(45deg)"
              w={8}
              h="3px"
              backgroundColor="black"
              mb={2}
            />
            <Box
              transform="rotate(135deg)"
              w={8}
              h="3px"
              backgroundColor="black"
              mb={2}
            />
          </Box>
        </Flex>

        <Flex
          fontFamily="inter"
          alignItems="center"
          justifyContent="space-between"
          flexDir="column"
          height="60vh"
        >
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/listings"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              Listings
            </Text>
          </Link>
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/about"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              About
            </Text>
          </Link>
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/how-it-works"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              How It works
            </Text>
          </Link>
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/contact"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              Contact
            </Text>
          </Link>
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/faq"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              FAQ
            </Text>
          </Link>
          <Link
            onClick={removeNavbarHandler}
            color="gray.500"
            as={rrdLink}
            to="/blog"
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
            >
              Blog
            </Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default MobileNav;
