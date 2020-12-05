import { Box } from "@chakra-ui/react";

const Container = (props) => {
	return (
		<Box
			mx="auto"
            px={{ base: "2rem", md: "2.3rem", lg: "2rem" }}
            w='100%'
			borderRadius="8px"
			{...props}
		/>
	);
};

export default Container;