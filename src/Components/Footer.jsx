import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const arrLength = new Array(5).fill(0);
  const facebookIcon = <FontAwesomeIcon fade size="lg" icon={faFacebook} />;
  const instaIcon = <FontAwesomeIcon fade size="lg" icon={faInstagram} />;
  const linkedinIcon = <FontAwesomeIcon fade size="lg" icon={faLinkedin} />;

  return (
    <Box w="100%" p="20px" bg="rgb(5,36,101)">
      <Box w="90%" m="auto" fontFamily="none" fontSize="13px" color="white">
        <Image
          w="120px"
          src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-white-footer.svg"
          alt="logo"
        />
        <br />
        <Text>
          At Eatfit we offer healthy, yummy, honest & wholesome Indian food,
          made with real ingredients, zero trans fat, and lots of love!
        </Text>
        <Text>#HealthyMadeHappier</Text>
      </Box>

      <br />

      <Box w="90%" m="auto" color="white">
        {arrLength.map((ele, ind) => (
          <Accordion allowMultiple>
            <AccordionItem border="none" borderBottom="1px solid #303030">
              <h2>
                <AccordionButton fontWeight="bold" p="12px 12px 12px 0">
                  <Box as="span" flex="1" textAlign="left">
                    Section {ind + 1} title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pl="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>

      <br />

      <Box w="90%" m="auto">
        <Heading fontSize="22px" color="rgb(255,45,105)">
          SITE MAP
        </Heading>
        <br />

        <SimpleGrid
          w="100%"
          gap="20px"
          color="white"
          columns={{ base: "2", sm: "3", md: "4", lg: "6", xl: "6" }}
        >
          {arrLength.map((ele, ind) => (
            <Box>
              <Text fontWeight="bold" mb="10px" textDecoration="underline">
                Our Brands
              </Text>
              <Text>All Brands</Text>
              <Text>Top Pics</Text>
              <Text>EatFit</Text>
              <Text>HRX</Text>
              <Text>CakeZone</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <br />

      <Text
        color="rgb(255,45,105)"
        textAlign="center"
        fontWeight="bold"
        fontSize="20px"
      >
        Follow us on
      </Text>
      <Text color="white" textAlign="center" fontSize="18px">
        {facebookIcon} {instaIcon} {linkedinIcon}
      </Text>
    </Box>
  );
}
