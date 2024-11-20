const getModelExtId = (name) => {
  switch (name) {
    case "GeminiChat":
    case "Google Gemini":
      return "5265a543-06b0-4762-a7af-aca23842b494";
    case "Mistral7b":
    case "Mistral 7B":
      return "b49ec7e8-0f5d-4f28-91bb-a51c71ff8858";
    case "Mistral8x7b":
    case "Mistral 8x7B":
      return "229c0711-3616-4e11-8053-8866f3e41a77";
    case "TitanExpress":
    case "Amazon Titan Express":
      return "c956fc34-7ca2-4537-b2ea-5ba696ac77d7";
    default:
      return "5265a543-06b0-4762-a7af-aca23842b494"; // Default value
  }
};

export default getModelExtId;
