exports.handler = async (event, context) => {
  const guides = [
    { title: "lorem", author: "Bilal" },
    { title: "lorem", author: "Ahmed" },
    { title: "lorem", author: "Ali" },
  ];
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({
      message: "ah,ah,ah you must be logged in to see this",
    }),
  };
};
