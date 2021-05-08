exports.handler = async (event, context) => {
  const guides = [
    { title: "React Guide", author: "Bilal" },
    { title: "Next Guide", author: "Ahmed" },
    { title: "Node Guide", author: "Ali" },
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
      message: "Ah,ah,ah you must be logged in to see this",
    }),
  };
};
