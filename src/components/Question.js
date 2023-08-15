import { Text } from "@mantine/core";

function Question({ placeName }) {
  return (
    <>
      <Text size="md" pt="sm">
        Where's this MRT station ah?
      </Text>
      <Text size="xl" pb="sm">
        <span id="place-name">{placeName}</span>
      </Text>
    </>
  );
}

export default Question;
