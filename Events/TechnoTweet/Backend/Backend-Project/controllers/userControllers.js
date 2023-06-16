const User = require('../Models/User');
const { StatusCodes } = require('http-status-codes')

const checkPassword = async (password, hash) => {
    return password === hash;
}

const signUp = async (req, res) => {
    try {
        const { username, emailId, password } = req.body;
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'User already exists!' });
        }
        const user = await User.create({ username, emailId, password });
        res.status(StatusCodes.CREATED).json({ user });
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Something went wrong' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { _id } = req.body;
        await User.findOneAndDelete({ _id });
        res.status(StatusCodes.OK).json({ msg: 'User Deleted Successfully!' });
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Something went wrong' });
    }
}


const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const existingUser = await User.findOne({ emailId });
        if (!existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'User not found!' });
        }
        const isPasswordCorrect = await checkPassword(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Invalid Credentials!' });
        }
        res.status(StatusCodes.OK).json({ msg: 'Login Successful!' });

    } catch (err) {
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Something went wrong' });
    }
}

module.exports = { deleteUser, login, signUp };