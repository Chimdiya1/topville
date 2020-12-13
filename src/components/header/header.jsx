import * as React from "react";
import {Link as rrdLink} from 'react-router-dom'
import {
	Box,
	Image,
	Flex,
	Link,
	Button,
	Text,
	Select,
} from "@chakra-ui/react";
import Container from "../container";
import MobileNav from "../mobileNav/mobileNav";

const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
	const removeNavbarHandler = () => {
		setMobileNavOpen(false);
	};
	const openNavbar = () => {
		setMobileNavOpen(true);
	};
	return (
		<Box position="relative" zIndex={10}>
			<Container position="absolute">
				<Flex
					py="1.5rem"
                    as="header"
                    w='100%'
					alignItems="center"
					justifyContent="space-between"
				>
					<Box flex={{ base: "1", md: "0.2", lg: "0.5", xl: "0.8" }}>
						<Link
							href="/"
							_hover={{ textDecoration: "none" }}
							position="relative"
						>
							<Image
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
								alt="Logo"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1606868554/chakra/brand_logo.png"
							/>
						</Link>
					</Box>
					<Flex
						fontFamily="inter"
						alignItems="center"
						justifyContent="space-between"
						flex="1"
						d={{ base: "none", md: "flex" }}
					>
                        <Link
                            as={rrdLink}
                            to='/listings'
							color="gray.400"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Listings
							</Text>
						</Link>
						{/* <Link
							color="gray.400"
							as={rrdLink}
                            to='/about'
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								About
							</Text>
						</Link> */}
						<Link
                            color="gray.400"
                            as={rrdLink}
                            to='/how-it-works'
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								How It works
							</Text>
						</Link>
						<Link
                            color="gray.400"
                            as={rrdLink}
                            to='/contact'
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Contact
							</Text>
						</Link>
						{/* <Link
							color="gray.400"
							as={rrdLink}
                            to='/faq'
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								FAQ
							</Text>
						</Link> */}
						<Link
							color="gray.400"
							as={rrdLink}
                            to='/blog'
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Blog
							</Text>
						</Link>
					</Flex>
					<Box
						onClick={openNavbar}
						cursor="pointer"
						d={{ base: "block", md: "none" }}
					>
						<Box w={8} h="3px" backgroundColor="white" mb={2} />
						<Box w={8} h="3px" backgroundColor="white" mb={2} />
						<Box w={8} h="3px" backgroundColor="white" mb={2} />
					</Box>
                </Flex>
            </Container>
			<MobileNav
				mobileNavOpen={mobileNavOpen}
				removeNavbarHandler={removeNavbarHandler}
			/>
		</Box>
	);
};

export default Header;