const requiredEnvVars = ['EXTERNAL_API_URL'] as const;

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const env = {
  PORT: process.env.PORT || '4000',
  EXTERNAL_API_URL: process.env.EXTERNAL_API_URL as string,
};