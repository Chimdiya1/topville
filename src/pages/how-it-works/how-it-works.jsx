import React from 'react';
import Hero from '../../components/hero/hero'
import {
    Box,
    Flex,
    Image
    
} from "@chakra-ui/react"
import WorksCard from '../../components/worksCard/worksCard'
import contact from '../../assets/contact.png'
import pay from '../../assets/pay.png'
import inspect from '../../assets/inspect.png'
import search from '../../assets/search-house.png'

let text = 'We want you to get the best out of life. After a stressful week, a weekend getaway might be what you need to refuel and refresh for the coming week.'

const HowItWorks = () => {
    return ( 
        <Box >
            <Hero text="How It Works" /> 
            <Flex flexDir='column' alignItems='center' w='100' py='50px'>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Search'
                        text={text}
                        buttonText='View Our Listings'
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={search} alt='search'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row-reverse']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Contact Us'
                        text={text}
                        buttonText='Contact'
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={contact} alt='contact'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Inspect'
                        text={text}
                        buttonText='Contact'
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={inspect} alt='inspect'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row-reverse']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Make Payment'
                        text={text}
                        buttonText='Contact'
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={pay} alt='pay'/>
                </Flex>
            </Flex>
            
        </Box>
     );
}
 
export default HowItWorks;