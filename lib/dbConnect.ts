import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URL;

if (!MONGODB_URI) {
  throw new Error("❌ A variável de ambiente MONGODB_URL não está configurada.");
}

// 🔥 Definição do cache global para armazenar a conexão
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;

}

declare global {
  const mongooseCache: MongooseCache | undefined;
}

// 🔹 Usa cache global para evitar múltiplas conexões no desenvolvimento
const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    console.log("✅ Já existe uma conexão ativa com o MongoDB.");
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set("strictQuery", true);
    console.log("🔄 Conectando ao MongoDB...");

    cached.promise = mongoose
      .connect(MONGODB_URI!, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000, // Tempo limite para conexão
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongooseInstance) => {
        console.log("✅ Conexão com o MongoDB estabelecida com sucesso!");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// 🔥 Armazena a conexão no cache global (apenas em desenvolvimento)
if (process.env.NODE_ENV !== "production") {
  global.mongooseCache = cached;
}