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
                        text='Navigate through our listings for properties available for sale/lease in your location.'
                        buttonText='View Our Listings'
                        address={'/listings'}
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={search} alt='search'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row-reverse']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Contact Us'
                        text=' Contact our experienced  agent who will guide you every step of the way.'
                        buttonText='Contact'
                        address={'/contact'}
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={contact} alt='contact'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Inspect'
                        text='TopVille assigned agent will organize an open-house tour of the property for you to get a clearer picture of what you’re paying for.'
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={inspect} alt='inspect'/>
                </Flex>
                <Flex mb='50px' flexDir={['column-reverse', null, 'row-reverse']} alignItems='center' justifyContent='space-between' width={['100%','80%','60%',null ]}>
                    <WorksCard
                        heading='Make Payment'
                        text="If satisfied with the house,then proceed to make payment through the appropriate channels."
                    />                    
                    <Image w={['250px','300px',null,null, '350px']} src={pay} alt='pay'/>
                </Flex>
            </Flex>
            
        </Box>
     );
}
 
export default HowItWorks;