import { Flex, Text } from "@mantine/core";

function Question({ placeName }) {
  console.log(placeName);

  return (
    <Flex direction="column" align="flex-start">
      <Text size="md">Where's this MRT station ah?</Text>
      <Text size="xl">
        <span id="place-name">{placeName}</span>
      </Text>
    </Flex>
  );
}

export default Question;
