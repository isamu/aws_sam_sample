const session = require('lambda-router20/lib/session');

const getSession = (event, context, callback) => {
  const sess = session.getSession(event.headers);
  
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
      session: sess.valid ? sess.data : null,
    }),
  };
  return callback(null, response)
};

const setSession = (event, context, callback) => {
  const options = session.getSessionHeader({status: "ok"});
  
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
      message: 'test',
    }),
    'headers': options.headers
  };
  return callback(null, response)
};


module.exports = {
  getSession,
  setSession,
}
