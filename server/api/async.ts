const asyncMethod = async () => {
  return "asynced"
}

export default async (req, res) => {
  await asyncMethod();

  return {
    someData: true,
  };
};
