import { cleanEnv, str, num } from 'envalid';

const validateEnv = () => {
	cleanEnv(process.env, {
		PORT: num(),
		DATABASE: str(),
		DB_USER: str(),
		DB_PASSWORD: str(),
		DB_HOST: str(),
		DB_PORT: num()
	});
};

export default validateEnv;
