
const test = (event, context, callback) => {
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
      message: 'test',
    }),
  };
  return callback(null, response)
};

const hello = (event, context, callback) => {
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
      message: event.params.message,
    }),
  };
  return callback(null, response)
}

const errorHandler = (code) => {
  return (event) => {
    return {
      'statusCode': code,
      'body': JSON.stringify({
        message: `${code} error`,
      }),
    }
  };
};

module.exports = {
  test,
  hello,
  errorHandler,
}
