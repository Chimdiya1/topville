import React, { useState } from 'react';
import {
    Box,
    useToast,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Button,
    Progress,
    Textarea,
    CircularProgress,
    
} from "@chakra-ui/react"
import firebase from '../../firebase'
import "firebase/storage";
import { Editor } from '@tinymce/tinymce-react';

const AddBlog = () => {
    const toast = useToast()
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('');

    const handleEditorChange = (e) => {
        setText(e.target.getContent());
    };
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
                    setImage(url)
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
                db.collection('blogs').add({
                    title: title,
                    text: text,
                    image:image,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(function (docRef) {
                    toast({
                        title: "Blog Post added Successfully",
                        description: "Your new Blog Post has beed added, please visit the blogs page to check it out",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }).then(() => {
                
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
                <FormControl mb='16px'  isRequired> 
                    <FormLabel>Content</FormLabel>
                    <Editor
                        required
                        apiKey="7jad044szb06ppzcv01aj0h8991g7q0frtponvf54wajvoa2"
                        name="text"
                        initialValue="<p>Initial content</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link ',
                            'charmap  anchor help',
                            'searchreplace visualblocks',
                            'wordcount',
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help',
                        }}
                        onChange={handleEditorChange}
                        onBeforeRenderUI={() => console.log('before')}
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
                </SimpleGrid>
                <Button mb={10} colorScheme='teal' type="submit" width={["200px","250px"]} mt={4}>
                    {isLoading ? (
                        <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                    ) : (
                        'ADD POST'
                    )}
                </Button>
            </form>
        </Box>
     );
}
 
export default AddBlog;