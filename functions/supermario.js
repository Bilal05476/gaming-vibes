exports.handler = async () => {
  console.log("function run");

  const data = { name: "Bilal", age: 21, job: "webDev" };

  //return res to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
