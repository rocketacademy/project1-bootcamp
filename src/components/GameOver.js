import { Flex, Paper, Text, Button } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  const theme = useMantineTheme();

  return (
    <Paper
      radius="0"
      bg={`rgba(${
        theme.colorScheme === "dark" ? "26, 27, 30" : "255, 255, 255"
      }, 0.7)`}
      h="100%"
    >
      <Flex direction="column" align="center" justify="center" h="100%">
        <Text size="lg" mb="md">
          Game over!
        </Text>
        <Text size="xl" mb="xl">
          Total score: <span style={{ fontWeight: "bold" }}>{totalScore}</span>
        </Text>
        <Button
          size="lg"
          mt="sm"
          px="1rem"
          ref={againRef}
          onClick={handleAgainClick}
        >
          Again?
        </Button>
      </Flex>
    </Paper>
  );
}

export default GameOver;
