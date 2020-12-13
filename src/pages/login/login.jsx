import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    useToast,
    FormErrorMessage,
    FormHelperText,
    Form, Field,
    Input,
    Button,
    Textarea,
    CircularProgress,
    Flex,
} from "@chakra-ui/react"
import { auth } from '../../firebase'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import Hero from '../../components/hero/hero'
import ErrorMessage from '../../components/errorMessage/errorMessage'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast()

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await auth
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        toast({
                            title: "Wrong Password",
                            description: "Please try again",
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        }) 
                    } else {
                    alert(errorMessage);
                    }
                });
            // toast({
            //     title: "Success!!",
            //     description: "Login Successful",
            //     status: "success",
            //     duration: 9000,
            //     isClosable: true,
            // }) 
        } catch (error) {
            toast({
                title: "an error occured",
                description: "Please try again",
                status: "error",
                duration: 9000,
                isClosable: true,
            }) 
        }
        setIsLoading(true);
    };
    return ( 
        <Box>
            <Hero text="Login" /> 
            <Flex p={['20px','50px',null,null,'80px']} flexDir={['column',null,'row']} justifyContent="space-between">
                <Box flex='1' marginRight={['0px', null, '20px']}>
                    <form  onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
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
                            <FormLabel>Password</FormLabel>
                            <Input
                                borderColor="grey.300"
                                focusBorderColor="brand.primary"
                                type="password"
                                placeholder="********"
                                size="md"
                                onChange={event => setPassword(event.currentTarget.value)}
                            />
                        </FormControl>
                                  
                        <Button mb={10} colorScheme='teal' rightIcon={<FontAwesomeIcon icon={faArrowRight} />} type="submit" width={["200px","250px"]} mt={4}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
     );
}
 
export default Login;