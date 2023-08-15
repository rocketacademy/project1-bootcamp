import { useEffect, useRef } from "react";

import { Flex, Paper, Button, Text, Title } from "@mantine/core";

function StartScreen({ setGameState }) {
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

        <Button size="lg" px="1rem" ref={startRef} onClick={handleStartClick}>
          Start
        </Button>
      </Paper>
    </Flex>
  );
}

export default StartScreen;
