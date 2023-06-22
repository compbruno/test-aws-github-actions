const sqsSimplify = require("sqsSimplify");

const QUEUE_URL = process.env.SQSqueueStartProcess;

exports.triggerCardMovedFunction = async (event, context) => {
  console.log("Inicio evento")
  console.log(event);
  console.log("Fim evento")
  await Promise.all(
    event.Records.map(async (element) => {
        sqsSimplify.deleteMessage(QUEUE_URL, element);
    })
  )
  return {
    statusCode: 200,
    body: event.Records,
  };
};