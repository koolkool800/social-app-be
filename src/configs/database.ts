import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/modules/**/entities/*.js'],
    synchronize: true,
  };
});
