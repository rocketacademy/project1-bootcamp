import { Text } from "@mantine/core";

function Question({ placeName }) {
  return (
    <>
      <Text size="md" mt="sm">
        Where's this MRT station ah?
      </Text>
      <Text size="xl" mb="sm">
        <span id="place-name">{placeName}</span>
      </Text>
    </>
  );
}

export default Question;
