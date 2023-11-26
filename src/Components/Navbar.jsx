import "../Styles/Navbar.css";
import { Flex, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const locationIcon = <FontAwesomeIcon flip size="md" icon={faMapMarker} />;
  const cartIcon = <FontAwesomeIcon size="md" icon={faShoppingBasket} />;
  const userIcon = <FontAwesomeIcon size="md" icon={faUser} />;

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      gap="15px"
      h="70px"
      alignItems="center"
      bg="white"
      position="fixed"
      top="0"
      zIndex="999"
      boxShadow="rgba(0, 0, 0, 0.192) 0px 3px 8px"
      p={{
        base: "0 10px",
        sm: "0 20px",
        md: "0 30px",
        lg: "0 30px",
        xl: "0 30px",
      }}
    >
      <Image
        cursor="pointer"
        w="120px"
        src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-logo-horizontal.svg"
        alt="logo"
      />

      <Flex
        className="navbar_mid"
        gap="30px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
        <Text>Order</Text>
        <Text>Meal Plans</Text>
        <Text>Search</Text>
        <Text>Food Pass</Text>
      </Flex>

      <Flex
        className="navbar_last"
        gap="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>
          <span style={{ color: "rgb(235,12,119)" }}>{locationIcon}</span>{" "}
          Mumbai
        </Text>
        <Text
          display={{
            base: "none",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          }}
        >
          {cartIcon}
        </Text>
        <Text
          display={{
            base: "none",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          }}
        >
          {userIcon} Login
        </Text>
      </Flex>
    </Flex>
  );
}
