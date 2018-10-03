const getUser = (event, context, callback) => {
  
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
      user: event.user
    }),
  };
  return callback(null, response)
};


module.exports = {
  getUser,
}
