import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  
  // Set token in HTTP-only cookie
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // prevent XSS attacks cross-site scripting 
    sameSite: 'strict', // CSRF protection
    secure: process.env.NODE_ENV !== 'development',
  });
}