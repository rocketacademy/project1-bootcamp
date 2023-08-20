import {
  Flex,
  Paper,
  Button,
  Text,
  Title,
  Space,
  Radio,
  Group,
  Select,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function StartScreen({
  setGameState,
  placesFile,
  setPlacesFile,
  maxQuestionNum,
  setMaxQuestionNum,
  toggleColorScheme,
  dark,
}) {
  function handleStartClick() {
    setGameState("GUESSING");
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column" justify="center">
      <Paper p="md" radius="0">
        <Title order={1} mb="sm">
          Where's That Ah?
        </Title>
        <Text size="md" mb="xl" align="left">
          Test and improve your geographical knowledge of places around
          Singapore!
        </Text>

        <Space h="md" />

        <Group position="center" mb="xl">
          <Select
            size="md"
            label="Choose which places:"
            value={placesFile}
            onChange={setPlacesFile}
            data={[
              {
                value: "mrt-stations-operating",
                label: "MRT stations (in operation)",
              },
              {
                value: "mrt-stations-all",
                label: "MRT stations (all)",
              },
            ]}
            miw="17.5rem"
          ></Select>
        </Group>

        <Radio.Group
          size="md"
          mb="xl"
          value={maxQuestionNum}
          onChange={setMaxQuestionNum}
          label="Choose how many questions:"
        >
          <Group position="center">
            <Radio checked value="5" label="5" />
            <Radio value="10" label="10" />
            <Radio value="20" label="20" />
          </Group>
        </Radio.Group>

        <Flex justify="center" align="center" gap="xs" py="sm" mb="xl">
          <Text size="md" fw="500">
            Toggle dark mode:
          </Text>
          <ActionIcon
            size="lg"
            variant="outline"
            onClick={() => toggleColorScheme()}
          >
            {dark ? <IconSun /> : <IconMoonStars />}
          </ActionIcon>
        </Flex>

        <Space h="xs" />

        <Button size="lg" my="md" px="1rem" onClick={handleStartClick}>
          Start
        </Button>
      </Paper>
    </Flex>
  );
}

export default StartScreen;
