import Fastify from "fastify";
import { configDotenv } from "dotenv";

configDotenv();

const fastify = Fastify({
  logger: false,
});

fastify.get("/health", async (request, reply) => {
  return {
    message: "API is Running !",
  };
});

const PORT = Number(process.env.PORT) || 3000;
const start = async () => {
  try {
    await fastify.listen({
      port: PORT,
    });
    console.log(`Api is running in port ${PORT}`);
  } catch (error) {
    console.error(`Error running the server !`);
  }
};

start();
