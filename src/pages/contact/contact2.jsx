import React, { useState } from 'react';
import {
    Box,
    Link,
    Flex,
    Heading,
    Text,
    Image
    
} from "@chakra-ui/react"
import contact from '../../assets/contact_us.png'
import Hero from '../../components/hero/hero'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return ( 
        <Box>
            <Hero text="Contact" /> 
            <Flex flexDir="column" alignItems='center'>
                <Image w={['90%', null, null, '50%']} src={contact} alt='contact' />
                <Flex  textAlign='center' alignItems='center' flexDir='column' bgColor='#BFFFDE' padding='16px' marginY="24px">
                    <p>See something you like or want to make a custom request?</p>
                    <p className='talk'>Click the number below to talk with us and let us get you your dream home</p>
                    <Link fontWeight='bold' href="tel:09134931040">
                        09134931040
                    </Link>
                    <p>OR</p>
                    <p className='talk'>Click this number to have a friendly chat with us on whatsapp</p>
                    <Link fontWeight='bold' href="https://api.whatsapp.com/send?phone=2349134931040">
                        <FontAwesomeIcon icon={faWhatsapp} /> 09134931040
                    </Link>
                </Flex>
            </Flex>
        </Box>
     );
}
 
export default Contact;