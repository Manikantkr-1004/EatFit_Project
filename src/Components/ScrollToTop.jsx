import { Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const arrow = <FontAwesomeIcon bounce size="md" icon={faArrowUp} />;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {isVisible && (
        <Flex
          onClick={handleScrollTop}
          justifyContent="center"
          alignItems="center"
          bg="rgb(255,49,109)"
          color="white"
          h="45px"
          w="45px"
          borderRadius="50%"
          cursor="pointer"
          position="fixed"
          bottom="10px"
          right="10px"
        >
          {arrow}
        </Flex>
      )}
    </>
  );
}
