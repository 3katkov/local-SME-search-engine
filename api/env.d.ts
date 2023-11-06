declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URL: string;
      DB_NAME: string;
      COLLECTION_NAME: string;
    }
  }
}
export {};
