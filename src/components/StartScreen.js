import { useEffect } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

import {
  Flex,
  Paper,
  Button,
  Text,
  Title,
  Radio,
  Group,
  ActionIcon,
} from "@mantine/core";

function StartScreen({
  setGameState,
  setMaxQuestionNum,
  toggleColorScheme,
  dark,
}) {
  useEffect(() => {
    setMaxQuestionNum(5);
  }, [setMaxQuestionNum]);

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

        <Radio.Group
          size="md"
          mb="xl"
          onChange={setMaxQuestionNum}
          label="Select how many places:"
          defaultValue="5"
        >
          <Group position="center">
            <Radio value="5" label="5" />
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

        <Button size="lg" my="md" px="1rem" onClick={handleStartClick}>
          Start
        </Button>
      </Paper>
    </Flex>
  );
}

export default StartScreen;
