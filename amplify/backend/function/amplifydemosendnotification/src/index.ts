/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	MY_ENV_PARAM
Amplify Params - DO NOT EDIT */

exports.handler = async (event: any) => {
  const isLocal = process.env.AWS_EXECUTION_ENV === 'AWS_Lambda_amplify-mock';

  console.log('isLocal', isLocal);
  console.log('Hello World bla bla bla');

  // TODO implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
