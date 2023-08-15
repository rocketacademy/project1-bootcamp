import { Flex, Paper, Text } from "@mantine/core";

function StartScreen() {
  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper h="100%" px="md" radius="0">
        <Text size="md">Placeholder text</Text>
      </Paper>
    </Flex>
  );
}

export default StartScreen;
