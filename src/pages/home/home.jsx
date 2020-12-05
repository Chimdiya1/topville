import React from 'react';
import { Flex, Heading, Button,Text,Link } from "@chakra-ui/react"
import {Link as rrdLink} from 'react-router-dom'

import Why from './whyChooseUs'

const Home = () => {
    return ( 
        <div className="home">
            <Flex
                background= "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/home.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height='100vh'
                align='center'
                justify='center'
                direction='column'
            >
                <Heading as="h2" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["3xl", "null", "4xl", "5xl"]} color="white" mb={5}>
                    FIND YOUR PERFECT HOME
                </Heading>
                <Link as={rrdLink} to='/listings'>
                    <Button
                        backgroundColor='brand.primary'
                        color='white'
                        width='240px'
                        height='60px'
                        fontSize='24px'
                        borderRadius='0'
                        size='lg'
                        _hover={{ bg: "brand.secondary" }}
                    >
                        Explore
                    </Button>
                </Link>
            </Flex>
            <Why />
            <Flex
                background= "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/home.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height='60vh'
                align='center'
                justify='center'
                direction='column'
            >
                <Heading as="h3" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["2xl", "null", "3xl", "4xl"]} color="white" >
                    Best Homes & Properties
                </Heading>
                <Text textAlign='center' my={25} color='silver' fontSize="lg">Some vague text about how using our service helps people and some other stuff.</Text>
                <Link as={rrdLink} to='/listings'>
                    <Button
                        backgroundColor='brand.primary'
                        color='white'
                        width='240px'
                        height='60px'
                        fontSize='24px'
                        borderRadius='0'
                        size='lg'
                        _hover={{ bg: "brand.secondary",textDecoration:'none' }}
                    >
                        Explore
                    </Button>
                </Link>
            </Flex>
            <Flex
                background= "linear-gradient( rgba(45, 122, 40, 0.83), rgba(45, 122, 40, 0.83) ), url('/assets/home.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height='40vh'
                align='center'
                justify='center'
                direction='column'
            >
                <Heading as="h3" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["2xl", "null", "3xl", "4xl"]} color="white" >
                    Ask our top consultants for a personalized offer today.
                </Heading>
                <a href="tel:09023894892">
                    <Button
                        backgroundColor='transparent'
                        border='5px solid white'
                        color='white'
                        width='240px'
                        height='60px'
                        fontSize='xl'
                        mt={10}
                        borderRadius='0'
                        size='lg'
                        _hover={{ bg: "white",color:'black' }}
                    >
                        CALL 08033989758
                    </Button>
                </a>
            </Flex>
        </div>
     );
}
 
export default Home;