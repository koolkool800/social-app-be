export const PORT = process.env.PORT ?? '8000';

//db
export const DATABASE_HOST = process.env.DATABASE_HOST ?? 'localhost';
export const DATABASE_PORT = process.env.DATABASE_PORT ?? '3380';
export const DATABASE_USER = process.env.DATABASE_USER ?? 'root';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? 'root';
export const DATABASE_NAME = process.env.DATABASE_NAME ?? 'app_db';
export const DATABASE_URL =
  process.env.DATABASE_URL ?? 'mysql://root:mariadb@127.0.0.1:3380/app_db';
