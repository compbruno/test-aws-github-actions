const sqsSimplify = require("sqsSimplify");
const queueUrl = process.env.SQS_QUEUE_START_PROCESS;

exports.newSupplierCardMovedFunction = async (event, context) => {
  try {
    await sqsSimplify.sendMessage(queueUrl, "teste");
    return {
      statusCode: 200,
      body: event.body,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      event: event.body,
    };
  }
};
