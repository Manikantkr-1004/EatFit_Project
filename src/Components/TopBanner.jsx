import "../Styles/TopBanner.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { firstBanner } from "../HomePageData/data";
import { useRef, useState } from "react";

export function TopBanner() {
  const secondBanner = new Array(6).fill(0);
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(parentRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const walk = (e.clientX - startX) * 2;
    parentRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleNavigate = (link) => {
    if (link) {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.click();
    }
  };

  return (
    <>
      <Box
        className="top_banner"
        w={{ base: "95%", sm: "95%", md: "70%", lg: "70%", xl: "70%" }}
        m="auto"
        mt="90px"
        overflowX="auto"
        whiteSpace="nowrap"
        p="5px"
      >
        {firstBanner.map((ele, index) => (
          <Box
            onClick={() => handleNavigate(ele.link)}
            display="inline-block"
            m={{
              base: "0 10px",
              sm: "0 10px",
              md: "0 20px",
              lg: "0 20px",
              xl: "0 20px",
            }}
            key={index + 1}
            textAlign="center"
            minWidth="70px"
            w="70px"
            p="5px"
            borderRadius="10px"
          >
            <Image
              borderRadius="full"
              border="2px solid rgb(235,12,119)"
              minWidth="50px"
              w="70px"
              src={ele.image}
              alt={ele.name}
            />

            <Text fontSize="11px">{ele.name}</Text>
          </Box>
        ))}
      </Box>
      <br />
      <Box
        className="second_banner"
        w="90%"
        m="auto"
        overflowX="auto"
        whiteSpace="nowrap"
        ref={parentRef}
      >
        {secondBanner.map((ele, ind) => (
          <Image
            w={{
              base: "330px",
              sm: "330px",
              md: "380px",
              lg: "380px",
              xl: "380px",
            }}
            display="inline-block"
            ref={childRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            m="0 15px"
            src="https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/4c2f18ea-7bfe-45f1-b163-7ca4ba331620.png"
            alt={ind}
          />
        ))}
      </Box>
    </>
  );
}
