import { useEffect, useRef } from "react";

import { Flex, Paper, Button, Text, Title, Radio, Group } from "@mantine/core";

function StartScreen({ setGameState, setMaxQuestionNum }) {
  const startRef = useRef(null);

  useEffect(() => {
    const handleConfirmKey = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if (startRef.current) {
          startRef.current.click();
        }
      }
    };

    window.addEventListener("keydown", handleConfirmKey);

    return () => {
      window.removeEventListener("keydown", handleConfirmKey);
    };
  }, []);

  useEffect(() => {
    setMaxQuestionNum(5);
  }, [setMaxQuestionNum]);

  function handleStartClick() {
    setGameState("GUESSING");
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column" justify="center">
      <Paper px="md" radius="0">
        <Title order={1}>Where's That Ah?</Title>
        <Text size="md" align="left">
          Test and improve your geographical knowledge of places around
          Singapore!
        </Text>

        <Radio.Group
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

        <Button size="lg" px="1rem" ref={startRef} onClick={handleStartClick}>
          Start
        </Button>
      </Paper>
    </Flex>
  );
}

export default StartScreen;
