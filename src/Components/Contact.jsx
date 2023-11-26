import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    toast({
      title: "Thanks For Contacting🙂",
      description: "Our team will reach out to you very soon...",
      duration: 3000,
      status: "success",
      isClosable: true,
      position: "bottom",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contact"
      w="100%"
      mt="30px"
      p="20px 0"
      bgImage="url(https://img.freepik.com/free-photo/herbs-garlic-aligned-triangle-shape_23-2148285375.jpg?w=2000)"
      bgRepeat="no-repeat"
      bgSize="cover"
      boxShadow="inset 0 0 60px 5px #fff,3px 3px 5px 0 #fff"
    >
      <Heading textAlign="center" color="rgb(5,36,101)">
        Contact US
      </Heading>

      <Box
        w={{ base: "100%", sm: "100%", md: "350px", lg: "350px", xl: "350px" }}
        mt="30px"
        backdropFilter="blur(10px)"
        p="20px"
        ml={{ base: "0", sm: "0", md: "50px", lg: "150px", xl: "150px" }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">Your Name:</FormLabel>
            <Input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              border="1px solid black"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <br />
            <br />

            <FormLabel fontWeight="bold">Your Email:</FormLabel>
            <Input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              border="1px solid black"
              type="email"
              placeholder="Enter Active Email"
              required
            />
            <br />
            <br />

            <FormLabel fontWeight="bold">Your Message:</FormLabel>
            <Textarea
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
              border="1px solid black"
              type="text"
              placeholder="Enter Your Messages"
            />
            <br />
            <br />

            <Button
              variant="unstyled"
              w="100%"
              bg="rgb(235,12,119)"
              color="white"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
