export enum ModelType {
    OPENAI_GPT_3_5_TURBO_16K = "openai-gpt-3.5-turbo-16k",
    // OPENAI_GPT_4_TURBO_PREVIEW = "openai-gpt-4-turbo-preview",
    // OPENAI_GPT_4_VISION_PREVIEW = "openai-gpt-4-vision-preview",
    OPENAI_GPT_4_OMNI = "openai-gpt-4o",
    OLLAMA_LLAVA = "ollama-llava",
    OLLAMA_BAKLLAVA = "ollama-bakllava",
    OLLAMA_MISTRAL = "ollama-mistral",
    // OLLAMA_LLAMA_2 = "ollama-llama2",
    OLLAMA_LLAMA_2_CHAT = "ollama_chat-llama2",
    // OLLAMA_LLAMA_3 = "ollama-llama3",
    OLLAMA_LLAMA_3_CHAT = "ollama_chat-llama3",
    GROQ_MIXTRAL = "groq-mixtral",
    GROQ_GEMMA_7B_IT = "groq-gemma-7b-it",
    GROQ_LLAMA_3_70B = "groq-llama3-70b",
    // ANTHROPIC_HAIKU = 'anthorpic-claude-3-haiku',
    ANTHROPIC_OPUS = "anthorpic-claude-3-opus",
    ANTHROPIC_SONNET = "anthorpic-claude-3-sonnet",
}

export const modelLabels: { [key in ModelType]: string } = {
    [ModelType.OPENAI_GPT_3_5_TURBO_16K]: "GPT-3.5 Turbo",
    // [ModelType.OPENAI_GPT_4_TURBO_PREVIEW]: "GPT-4 Turbo",
    // [ModelType.OPENAI_GPT_4_VISION_PREVIEW]: "GPT-4 Vision",
    [ModelType.OPENAI_GPT_4_OMNI]: "GPT-4 Omni",
    [ModelType.OLLAMA_LLAVA]: "Ollama - LLaVA",
    [ModelType.OLLAMA_BAKLLAVA]: "Ollama - BakLLaVA",
    [ModelType.OLLAMA_MISTRAL]: "Ollama - Mistral",
    // [ModelType.OLLAMA_LLAMA_2]: "Ollama - LLaMA 2",
    [ModelType.OLLAMA_LLAMA_2_CHAT]: "Ollama - LLaMA 2 Chat",
    // [ModelType.OLLAMA_LLAMA_3]: "Ollama - LLaMA 3",
    [ModelType.OLLAMA_LLAMA_3_CHAT]: "Ollama - LLaMA 3 Chat",
    [ModelType.GROQ_MIXTRAL]: "Groq - Mixtral",
    [ModelType.GROQ_GEMMA_7B_IT]: "Groq - Gemma 7b IT",
    [ModelType.GROQ_LLAMA_3_70B]: "Groq - LLaMA 3",
    // [ModelType.ANTHROPIC_HAIKU]: "Anthropic - Claude 3 Haiku",
    [ModelType.ANTHROPIC_OPUS]: "Anthropic - Opus",
    [ModelType.ANTHROPIC_SONNET]: "Anthropic - Sonnet",
};

export const acceptRagSystemMessage = new Set<string>([
    ModelType.GROQ_LLAMA_3_70B,
    ModelType.GROQ_GEMMA_7B_IT,
    ModelType.GROQ_MIXTRAL,
    ModelType.OLLAMA_LLAMA_3_CHAT,
    ModelType.OLLAMA_MISTRAL,
    ModelType.OLLAMA_LLAVA,
    ModelType.OLLAMA_BAKLLAVA,
    ModelType.OLLAMA_LLAMA_2_CHAT,
    ModelType.OPENAI_GPT_3_5_TURBO_16K,
    // ModelType.OPENAI_GPT_4_TURBO_PREVIEW,
    // ModelType.OPENAI_GPT_4_VISION_PREVIEW,
    ModelType.OPENAI_GPT_4_OMNI, 
]);

export const multiModalModels = {
    [ModelType.OLLAMA_LLAVA]: "Ollama - LLaVA",
    [ModelType.OLLAMA_BAKLLAVA]: "Ollama - BakLLaVA",
    // [ModelType.OPENAI_GPT_4_VISION_PREVIEW]: "GPT-4 Vision",
    [ModelType.OPENAI_GPT_4_OMNI]: "OpenAI - GPT-4 Omni",
    [ModelType.ANTHROPIC_OPUS]: "Anthropic - Opus",
};

export const onPremModels = {
    [ModelType.OLLAMA_LLAVA]: "Ollama - LLaVA",
    [ModelType.OLLAMA_BAKLLAVA]: "Ollama - BakLLaVA",
    [ModelType.OLLAMA_MISTRAL]: "Ollama - Mistral",
    [ModelType.OLLAMA_LLAMA_2_CHAT]: "Ollama - LLaMA 2 Chat",
    [ModelType.OLLAMA_LLAMA_3_CHAT]: "Ollama - LLaMA 3 Chat",
};

export enum MemoryType {
    CONVERSATION_KG = 'conversation_kg',
    AGENT_TOKEN_BUFFER = 'agent_token_buffer'
}

export enum SearchType {
    MMR = "mmr",
    SIMILARITY = "similarity",
    SIMILARITY_SCORE_THRESHOLD = "similarity_score_threshold",
}

export enum SearchProvider {
    PINECONE = "pinecone",
    REDIS = "redis",
    MONGO = "mongo",
    FAISS = "faiss",
}
