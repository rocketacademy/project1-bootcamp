import { Flex, Text } from "@mantine/core";

function Question({ placeName }) {
  return (
    <Flex direction="column" align="flex-start">
      <Text size="md">Where's this MRT station ah?</Text>
      <Text size="xl" ta="left">
        <span id="place-name">{placeName}</span>
      </Text>
    </Flex>
  );
}

export default Question;
