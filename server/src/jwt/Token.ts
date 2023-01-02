import jwt from 'jsonwebtoken';
import FormInputs from '../models/FormInputs';

const generateAccessToken = (input: FormInputs): string => {
    const {username, password} = input
    return jwt.sign(input, process.env.TOKEN_KEY as string, { expiresIn: "1800" });
}

export default generateAccessToken