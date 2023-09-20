import {
  Button,
  Text,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./logo-biquidity.svg";

/**
 * The GetStarted component is the start page of the application.
 * It provides a description of the game rules and offers a navigation option to the trading page.
 */

function GetStarted(props) {
  /**
   * Renders the GetStarted component with branding, a start button, and FAQs.
   * @return {JSX.Element} - Rendered GetStarted component.
   */

  return (
    <Stack spacing={6} align="center" w="100%">
      <Text fontSize="5xl" fontWeight="bold" color="text">
        Biquidity
      </Text>
      <Image src={Logo} alt="Biquidity Logo" boxSize="80px" />
      <Button
        bgColor="primary"
        color="text"
        onClick={() => props.navigateTo("/stock")}
      >
        I'm feeling lucky
      </Button>
      <Box
        p={4}
        w="100%"
        backgroundColor="secondary"
        borderRadius="md"
        color="text"
      >
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          FAQs
        </Text>
        <OrderedList spacing={3}>
          <ListItem display="block" fontSize="md" as="i">
            1. Select the stock, crypto, bond, or commodity that you're looking
            to trade.
          </ListItem>
          <ListItem display="block" fontSize="md" as="i">
            2. Watch the news, are you bullish or bearish?
          </ListItem>
          <ListItem display="block" fontSize="md" as="i">
            3. Call if you're bullish and Put if you're bearish.
          </ListItem>
          <ListItem display="block" fontSize="md" as="i">
            4. Watch your buying power grow as you make the right trades.
          </ListItem>
          <ListItem display="block" fontSize="md" as="i">
            5. Trade another stock, crypto, bond, or commodity. Share with your
            friends!
          </ListItem>
        </OrderedList>
      </Box>
    </Stack>
  );
}

export default GetStarted;
