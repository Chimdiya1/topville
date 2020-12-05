import React, { useState } from 'react';
import {
    Box,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Form, Field,
    Input,
    Button,
    Textarea,
    CircularProgress,
    Flex,
    Heading,
    Text
    
} from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Hero from '../../components/hero/hero'
import ErrorMessage from '../../components/errorMessage/errorMessage'
import {SendContact} from './sendContact'
let text = 'Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later  Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later'

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await SendContact({ email, lastName });
            setIsLoading(false);
        } catch (error) {
            setError('An error has occured');
            setIsLoading(false);
            setFirstName('')
            setLastName('')
            setEmail('');
            setMessage('');
        }
    };
    return ( 
        <Box>
            <Hero text="Contact" /> 
            <Flex p={['20px','50px',null,null,'80px']} flexDir={['column',null,'row']} justifyContent="space-between">
                <Box flex='1' marginRight={['0px', null, '20px']}>
                    <form  onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
                        <Flex flexDir={['column',null,'row']} justifyContent='space-between'>
                            <FormControl width={['100%',null,'45%']} isRequired> 
                                <FormLabel>First Name</FormLabel>
                                <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="John" onChange={event => setFirstName(event.currentTarget.value)}/>
                            </FormControl>
                            <FormControl mt={["20px",null, '0px']} width={['100%',null,'45%']}  isRequired> 
                                <FormLabel>Last Name</FormLabel>
                                <Input borderColor="grey.00" size="md" focusBorderColor="brand.primary" type="text" placeholder="Francis" onChange={event => setLastName(event.currentTarget.value)}/>
                            </FormControl>
                        </Flex>
                        <FormControl mt="20px" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                borderColor="grey.300"
                                focusBorderColor="brand.primary"
                                type="email"
                                placeholder="test@test.com"
                                size="md"
                                onChange={event => setEmail(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl mt="20px" isRequired>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                borderColor="grey.300" focusBorderColor="brand.primary"
                                onChange={event => setMessage(event.currentTarget.value)}
                                placeholder="write your message here"
                                size="md"
                            />
                        </FormControl>
                        
                        
                        <Button mb={10} colorScheme='teal' rightIcon={<FontAwesomeIcon icon={faArrowRight} />} type="submit" width={["200px","250px"]} mt={4}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                            ) : (
                                'SEND'
                            )}
                        </Button>
                    </form>
                </Box>
                
                <Flex w="250px" flexDir='column' alignItems='flex-start' >
                    <Heading  mb={'20px'}  as="h3" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["xl", null, "xl", "2xl"]} color="black" >
                        Contact Details
                    </Heading>
                    <Flex mb={'10px'} alignItems='center'>
                        <FontAwesomeIcon style={{marginRight:'20px'}} color="red" icon={faLocationArrow} /><Text mb={'10px'}>  This is where we would write the address and the address </Text>
                    </Flex>
                    <Flex mb={'10px'} alignItems='center'>
                        <FontAwesomeIcon style={{marginRight:'20px'}} color="red" icon={faMailBulk} /><Text mb={'10px'}>buhsfbsisbufi@gmail.com </Text>
                    </Flex>
                    <Flex mb={'10px'} alignItems='center'>
                        <FontAwesomeIcon style={{marginRight:'20px'}} color="red" icon={faPhone} /><Text >0708877545, 02077654368</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
     );
}
 
export default Contact;