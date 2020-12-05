import React, { useState } from 'react';
import {
    Box,
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Input,
    Button,
    Textarea,
    CircularProgress,
    Flex,
    Heading,
    Text
    
} from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Hero from '../../components/hero/hero'
import ErrorMessage from '../../components/errorMessage/errorMessage'
// import {SendContact} from './sendContact'
let text = 'Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later  Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later'

const Search = () => {
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
            // await SendContact({ email, lastName });
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
        <Box  w="80%" bgColor='black' >
            <Flex p={['20px','30px',null,null,'50px']} flexDir={['column',null,'row']} justifyContent="space-between">
                <Box flex='1' marginRight={['0px', null, '20px']}>
                    <form  onSubmit={handleSubmit} >
                        {error && <ErrorMessage message={error} />}
                        <FormControl width='100%' > 
                                <FormLabel color='white'>First Name</FormLabel>
                                <Select
                                    bg="white"
                                    borderColor="white"
                                    color="black"
                                    placeholder="Select option" onChange={event => setFirstName(event.currentTarget.value)}>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                </Select>
                        </FormControl>
                        <Flex mt={['0px',null,'24px']} color='white' flexDir={['column',null,'row']} justifyContent='space-between'>
                            <FormControl width={['100%',null,'24%']} > 
                                <FormLabel>First Name</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black" placeholder="Select option" onChange={event => setFirstName(event.currentTarget.value)}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </FormControl>
                            <FormControl width={['100%',null,'24%']} > 
                                <FormLabel>First Name</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black"  placeholder="Select option" onChange={event => setFirstName(event.currentTarget.value)}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </FormControl>
                            <FormControl width={['100%',null,'24%']} > 
                                <FormLabel>First Name</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black"  placeholder="Select option" onChange={event => setFirstName(event.currentTarget.value)}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </FormControl>
                            <FormControl width={['100%',null,'24%']} > 
                                <FormLabel>First Name</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black" placeholder="Select option" onChange={event => setFirstName(event.currentTarget.value)}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </FormControl>
                            
                        </Flex>                                               
                        <Button mx='auto' alignSelf='center' mb={10} colorScheme='green' rightIcon={<FontAwesomeIcon icon={faArrowRight} />} type="submit" width={["200px","250px"]} mt={4}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                            ) : (
                                'Search'
                            )}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
     );
}
 
export default Search;