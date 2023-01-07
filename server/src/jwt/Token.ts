import jwt from 'jsonwebtoken';
import FormInputs from '../models/FormInputs';

const generateAccessToken = (input: FormInputs): string => {
    const {username, password} = input
    return jwt.sign(input, process.env.TOKEN_KEY as string, { expiresIn: "24h" });
}

export default generateAccessToken