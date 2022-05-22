/* eslint-disable @typescript-eslint/no-namespace */
import { config } from 'dotenv';

config();

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface ProcessEnv {
      PORT: number;
      ALLOWED_ORIGIN: string;
      EXTERNAL_URL: string;
      DATABASE_URL: string;
      POSTGRES_HOST: string;
      POSTGRES_DATABASE: string;
      POSTGRES_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      SMTP_HOST: string;
      SMTP_PORT: string;
      SMTP_SENDER_EMAIL: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      NODE_ENV: string;
    }
  }
}
