import { Text, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  questionContainer: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    lineHeight: 1,
  },
}));

function Question({ placeName, againRef, handleResetClick }) {
  const { classes } = useStyles();

  return (
    <div className={classes.questionContainer}>
      <div className={classes.backButton}>
        <Button
          size="md"
          px="1rem"
          ref={againRef}
          onClick={handleResetClick}
          variant="outline"
        >
          Reset
        </Button>
      </div>
      <Text size="md" pt="sm">
        Where's this MRT station ah?
      </Text>
      <Text size="xl" pb="sm">
        <span id="place-name">{placeName}</span>
      </Text>
    </div>
  );
}

export default Question;
