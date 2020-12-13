import React, { useState } from 'react';
import {
    Box,
    useToast,
    SimpleGrid,
    Progress,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    Textarea,
    CircularProgress,
    Flex,
    Heading,
    Text
    
} from "@chakra-ui/react"
import firebase from '../../firebase'
import "firebase/storage";

import Hero from '../../components/hero/hero'

const AddListing = () => {
    const toast = useToast()


    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [purpose, setPurpose] = useState('');
    const [type, setType] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [cars, setCars] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const [progress, setProgress] = useState(0);
   


    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const uploadImage = (file) => {
    let image = null
    if (file) {
      image = file
        }
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...          
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );          
          setProgress(uploadProgress)          
      },
      error => {
        // Error function ...
          console.log(error);
          toast({
          title: "an error occured",
          description: "Please try again",
          status: "error",
          duration: 9000,
          isClosable: true,
          })         
      },
      () => {
        // complete function ...
        firebase.storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            let imageurl = [...images, url]
            setImages(imageurl)
            console.log(images)
          });
          toast({
          title: "upload successful",
          description: "Image Uploaded Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          })
          setProgress(0)          
      }

    )
  }


    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        if (progress === 0) {
            try {                
                const db = firebase.firestore()
                db.collection('listings').add({
                    title: title,
                    location: location,
                    price: Number.parseInt(price),
                    purpose: purpose,
                    type: type,
                    bedrooms: Number.parseInt(bedrooms),
                    bathrooms: Number.parseInt(bathrooms),
                    cars: Number.parseInt(cars),
                    address: address,
                    images: images,
                    videoLink: videoLink,
                    description: description,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(function (docRef) {
                    toast({
                        title: "Listing added Successfully",
                        description: "Your new listing has beed added, please visit the listing page to check it out",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }).then(() => {
                    setAddress(' ')
                        setBathrooms(0)
                        setBedrooms(0)
                        setCars(0)
                        setDescription('')
                        setImages([])
                        setIsLoading(false)
                        setLocation('')
                        setPrice(0)
                        setProgress(0)
                        setPurpose('')
                        setTitle('')
                        setType('')
                        setVideoLink('')
                })                    
                    .catch(function (error) {
                    toast({
                        title: "An error has occured",
                        description: "An error ha occured, please try again",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                });    
            } catch (err) {
                console.log(err)
            }
        }
        else {
            toast({
                title: "Please wait",
                description: "An image is still being uploaded",
                status: "warning",
                duration: 9000,
                isClosable: true,
            })
        }
        setIsLoading(false);
    };
    return ( 
        <Box marginX='auto' p={['20px','50px',null,null,'80px']} width={['100%',null,'80%']}>
            <form  onSubmit={handleSubmit}>
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Title</FormLabel>
                    <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="Self Contain" onChange={event => setTitle(event.currentTarget.value)}/>
                </FormControl>
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Location</FormLabel>
                    <Select
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        bg="white"
                        color="black"
                        placeholder="Select Location" onChange={event => setLocation(event.currentTarget.value)}>
                            <option value="Hilltop">Hilltop</option>
                            <option value="Odenigwe">Odenigwe</option>
                            <option value="Town">Town</option>
                            <option value="Odim">Odim</option>
                            <option value="Campus">Campus</option>
                            <option value="Behind-FLat">Behind FLat</option>
                    </Select>
                </FormControl>
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Purpose</FormLabel>
                    <Select
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        bg="white"
                        color="black"
                        placeholder="Select Location" onChange={event => setPurpose(event.currentTarget.value)}>
                            <option value="Sale">Sale</option>
                            <option value="Sale">Rent</option>
                    </Select>
                </FormControl>
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Type</FormLabel>
                    <Select
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        bg="white"
                        color="black"
                        placeholder="Select option" onChange={event => setType(event.currentTarget.value)}>
                            <option value="office-space">Office Space</option>
                            <option value="self-contain">Self Contain</option>
                            <option value="flat">Flat</option>
                            <option value="single-room">Single Room</option>
                            <option value="bq">BQ</option>
                    </Select>
                </FormControl>
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Price</FormLabel>
                    <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="100000" onChange={event => setPrice(event.currentTarget.value)}/>
                </FormControl>                                                           
                <FormControl mb='16px'  > 
                    <FormLabel>Youtube Link</FormLabel>
                    <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="url" placeholder="https://www.youtube.com/" onChange={event => setVideoLink(event.currentTarget.value)}/>
                </FormControl>                                                           
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Address</FormLabel>
                    <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="5 bg close, hilltop." onChange={event => setAddress(event.currentTarget.value)}/>
                </FormControl>      
                <Flex mb='16px'>
                    <FormControl  isRequired> 
                        <FormLabel>bedrooms</FormLabel>
                        <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="5" onChange={event => setBedrooms(event.currentTarget.value)}/>
                    </FormControl> 
                    <FormControl  isRequired> 
                        <FormLabel>bathrooms</FormLabel>
                        <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="1" onChange={event => setBathrooms(event.currentTarget.value)}/>
                    </FormControl> 
                    <FormControl  isRequired> 
                        <FormLabel>Cars</FormLabel>
                        <Input borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="5" onChange={event => setCars(event.currentTarget.value)}/>
                    </FormControl> 
                </Flex>
                                                                          
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        isRequired
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        onChange={event => setDescription(event.currentTarget.value)}
                        placeholder="write your message here"
                        size="md"
                    />
                </FormControl> 
                <Progress hasStripe value={progress} />
                <SimpleGrid minChildWidth="200px" paddingY='50px' spacing="20px" m='auto' justifyContent='space-between' width='100%' mb='16px'>
                    <FormControl  isRequired> 
                        <FormLabel>Image 1</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            isRequired
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image1"
                            id="image1"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    <FormControl  isRequired> 
                        <FormLabel>Image 2</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            isRequired
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image2"
                            id="image2"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 3</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image3"
                            id="image3"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 4</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image4"
                            id="image4"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 5</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image5"
                            id="image5"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 6</FormLabel>
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image6"
                            id="image6"
                            onChange={event => uploadImage(event.currentTarget.files[0])}
                        />
                    </FormControl> 
                    
                </SimpleGrid>
                <Button mb={10} colorScheme='teal' type="submit" width={["200px","250px"]} mt={4}>
                    {isLoading ? (
                        <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                    ) : (
                        'ADD'
                    )}
                </Button>
            </form>
        </Box>
     );
}
 
export default AddListing;