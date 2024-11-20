const getPromptModelName = (extId) => {
  switch (extId) {
    case "5265a543-06b0-4762-a7af-aca23842b494":
      return "GEMINI_CHAT_MODEL";
    case "b49ec7e8-0f5d-4f28-91bb-a51c71ff8858":
      return "MISTRAL_7B_MODEL";
    case "229c0711-3616-4e11-8053-8866f3e41a77":
      return "MISTRAL_8X7B_MODEL";
    case "c956fc34-7ca2-4537-b2ea-5ba696ac77d7":
      return "TITAN_EXPRESS_MODEL";
    case "d051f899-8f64-49df-8559-e0a113df989b":
      return "AI21_JURASSIC_MID_MODEL";
    case "09f686d0-1727-4c7c-bfb4-4cd97f5d3197":
      return "AI21_JURASSIC_ULTRA_MODEL";
    case "0ac438c1-64d8-4074-b288-acb0b30498b9":
      return "LLAMA_3_8B_INSTRUCT_MODEL";
    default:
      return "GEMINI_CHAT_MODEL";
  }
};

export default getPromptModelName;
