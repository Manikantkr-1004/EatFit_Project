import { useState } from "react";
import "../Styles/MidContent.css";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { foodData } from "../HomePageData/data";

export function MidContent() {
  const [originalData, setOriginalData] = useState(foodData);
  const [data, setData] = useState(originalData);

  const handleSort = (e) => {
    let value = e.target.value;

    if (value === "") {
      setData(originalData);
    } else if (value === "asc") {
      let sorted = [...originalData].sort((a, b) => a.price - b.price);
      setData(sorted);
    } else {
      let sorted = [...originalData].sort((a, b) => b.price - a.price);
      setData(sorted);
    }
  };

  const handleFilter = (e) => {
    let value = e.target.value;

    if (value === "") {
      setData(originalData);
    } else {
      let filtered = originalData.filter((ele) => ele.food === value);
      setData(filtered);
    }
  };

  return (
    <Box id="menu" w="88%" m="auto" mt="20px">
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        gap="15px"
        mt="30px"
        p="15px 10px"
        borderBottom="1px solid #bebebe"
        position="sticky"
        top="70px"
        bg="white"
        zIndex="99"
      >
        <Select w="48%" cursor="pointer" onChange={(e) => handleSort(e)}>
          <option value="">Sort By Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select w="48%" cursor="pointer" onChange={(e) => handleFilter(e)}>
          <option value="">Filter By Category</option>
          <option value="vegan">Vegan</option>
          <option value="keto">Keto</option>
        </Select>
      </Flex>

      <br />
      <Text fontWeight="600" color="rgb(5,36,101)" fontSize="20px">
        Some Delicious & Healthy Foods
      </Text>
      <br />

      <SimpleGrid
        w="100%"
        gap="5px"
        columns={{ base: "1", sm: "2", md: "3", lg: "4", xl: "4" }}
      >
        {data.map((ele, ind) => (
          <Box className="card_item" key={ele.des} p="20px" borderRadius="10px">
            <Box
              w="100%"
              position="relative"
              overflow="hidden"
              borderRadius="5px"
            >
              <Image
                className="card_item_image"
                w="100%"
                src={ele.image}
                alt={ele.price}
              />
              {ele.new && (
                <Text
                  className="card_item_new"
                  position="absolute"
                  fontSize="13px"
                  left="0"
                  top="0"
                  p="2px 5px"
                  bg="rgb(235,12,119)"
                  color="white"
                >
                  NEW
                </Text>
              )}
              <Image
                position="absolute"
                left="5px"
                bottom="-10px"
                w="50px"
                src="https://curefoods-images.eatfit.in/image/listing-brands/HOME_PLATE/HOME_PLATE_IMAGE_production_2nd_Aug_23_10_41_04.svg"
                alt="logoIcon"
              />
            </Box>

            <Text fontWeight="600" m="10px 0">
              {ele.des}
            </Text>
            <Text>Category:- {ele.food}</Text>

            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Text fontWeight="600">
                ₹{ele.price}{" "}
                <span
                  style={{ color: "#838383", textDecoration: "line-through" }}
                >
                  ₹{ele.price * 3}
                </span>
              </Text>
              <Button
                variant="styled"
                bg="rgb(5,36,101)"
                color="white"
                p="3px 15px"
              >
                ADD
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
