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
import { useSelector } from 'react-redux'


const EditListingForm = ({id}) => {
    const listings = useSelector(state => state.listings.listings)
    const item = listings.filter(item => item.id === id)

    const toast = useToast()
    const [title, setTitle] = useState(item[0].title);
    const [price, setPrice] = useState(item[0].price);
    const [purpose, setPurpose] = useState(item[0].purpose);
    const [type, setType] = useState(item[0].type);
    const [bedrooms, setBedrooms] = useState(item[0].bedrooms);
    const [bathrooms, setBathrooms] = useState(item[0].bathrooms);
    const [cars, setCars] = useState(item[0].cars);
    const [location, setLocation] = useState(item[0].location);
    const [address, setAddress] = useState(item[0].address);
    const [videoLink, setVideoLink] = useState(item[0].videoLink);
    const [images, setImages] = useState(item[0].images);
    const [description, setDescription] = useState(item[0].description);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const uploadImage = (file,num) => {
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
            let NewImages = [...images]
            NewImages[num] = url
            setImages(NewImages)
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
                db.collection('listings').doc(id).set({
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
                        title: "Listing Edited Successfully",
                        description: "Your new listing has beed Edited, please visit the listing page to check it out",
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
                toast({
                        title: "An error has occured",
                        description: "An error ha occured, please try again",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
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
                    <Input borderColor="grey.300" defaultValue={item[0].title} size="md" focusBorderColor="brand.primary" type="text" placeholder="Self Contain" onChange={event => setTitle(event.currentTarget.value)}/>
                </FormControl>
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Location</FormLabel>
                    <Select
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        bg="white"
                        color="black"
                        placeholder="Select Location" defaultValue={item[0].location} onChange={event => setLocation(event.currentTarget.value)}>
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
                        placeholder="Select Location" defaultValue={item[0].purpose} onChange={event => setPurpose(event.currentTarget.value)}>
                            <option value="Sale">Sale</option>
                            <option value="Rent">Rent</option>
                    </Select>
                </FormControl>
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Type</FormLabel>
                    <Select
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        bg="white"
                        color="black"
                        placeholder="Select option" defaultValue={item[0].type} onChange={event => setType(event.currentTarget.value)}>
                            <option value="office-space">Office Space</option>
                            <option value="self-contain">Self Contain</option>
                            <option value="flat">Flat</option>
                            <option value="single-room">Single Room</option>
                            <option value="bq">BQ</option>
                    </Select>
                </FormControl>
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Price</FormLabel>
                    <Input defaultValue={item[0].price} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="100000" onChange={event => setPrice(event.currentTarget.value)}/>
                </FormControl>                                                           
                <FormControl mb='16px'  > 
                    <FormLabel>Youtube Link</FormLabel>
                    <Input defaultValue={item[0].videoLink} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="url" placeholder="https://www.youtube.com/" onChange={event => setVideoLink(event.currentTarget.value)}/>
                </FormControl>                                                           
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Address</FormLabel>
                    <Input defaultValue={item[0].address} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="text" placeholder="5 bg close, hilltop." onChange={event => setAddress(event.currentTarget.value)}/>
                </FormControl>      
                <Flex mb='16px'>
                    <FormControl  isRequired> 
                        <FormLabel>bedrooms</FormLabel>
                        <Input defaultValue={item[0].bedrooms} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="5" onChange={event => setBedrooms(event.currentTarget.value)}/>
                    </FormControl> 
                    <FormControl  isRequired> 
                        <FormLabel>bathrooms</FormLabel>
                        <Input defaultValue={item[0].bathrooms} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="1" onChange={event => setBathrooms(event.currentTarget.value)}/>
                    </FormControl> 
                    <FormControl  isRequired> 
                        <FormLabel>Cars</FormLabel>
                        <Input defaultValue={item[0].cars} borderColor="grey.300" size="md" focusBorderColor="brand.primary" type="number" placeholder="5" onChange={event => setCars(event.currentTarget.value)}/>
                    </FormControl> 
                </Flex>
                                                                          
                <FormControl mb='16px' isRequired> 
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        defaultValue={item[0].description}
                        isRequired
                        borderColor="grey.300" focusBorderColor="brand.primary"
                        onChange={event => setDescription(event.currentTarget.value)}
                        placeholder="write your message here"
                        size="md"
                    />
                </FormControl> 
                <Progress hasStripe value={progress} />
                <SimpleGrid minChildWidth="200px" paddingY='50px' spacing="20px" m='auto' justifyContent='space-between' width='100%' mb='16px'>
                    <FormControl > 
                        <FormLabel>Image 1</FormLabel>
                        {item[0].images[0] && <img alt='edit' src={item[0].images[0]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image1"
                            id="image1"
                            onChange={event => uploadImage(event.currentTarget.files[0],0)}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 2</FormLabel>
                        {item[0].images[1] && <img alt='edit' src={item[0].images[1]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image2"
                            id="image2"
                            onChange={event => uploadImage(event.currentTarget.files[0],1)}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 3</FormLabel>
                        {item[0].images[2] && <img alt='edit' src={item[0].images[2]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image3"
                            id="image3"
                            onChange={event => uploadImage(event.currentTarget.files[0],2)}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 4</FormLabel>
                        {item[0].images[3] && <img alt='edit' src={item[0].images[3]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image4"
                            id="image4"
                            onChange={event => uploadImage(event.currentTarget.files[0],3)}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 5</FormLabel>
                        {item[0].images[4] && <img alt='edit' src={item[0].images[4]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image5"
                            id="image5"
                            onChange={event => uploadImage(event.currentTarget.files[0],4)}
                        />
                    </FormControl> 
                    <FormControl > 
                        <FormLabel>Image 6</FormLabel>
                        {item[0].images[5] && <img alt='edit' src={item[0].images[5]} />}
                        <Input
                            isDisabled={progress !== 0}
                            size="sm"
                            focusBorderColor="brand.primary"
                            type="file"
                            name="image6"
                            id="image6"
                            onChange={event => uploadImage(event.currentTarget.files[0],5)}
                        />
                    </FormControl> 
                    
                </SimpleGrid>
                <Button mb={10} colorScheme='teal' type="submit" width={["200px","250px"]} mt={4}>
                    {isLoading ? (
                        <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                    ) : (
                        'Edit'
                    )}
                </Button>
            </form>
        </Box>
     );
}
 
export default EditListingForm;