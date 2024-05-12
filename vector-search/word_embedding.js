
 
export default defineComponent({
    async run({ steps, $ }) {
      const response = await fetch(
          "model",
          {
              headers: { Authorization: "Bearer XXXX" },
              method: "POST",
              body: JSON.stringify(steps.trigger.event.body.input),
          }
      );
      const result = await response.json();
    console.log(result);
    const justScoreArray = result[0].map(scoreAndLabel=> scoreAndLabel.score)
    return justScoreArray
    },
  })