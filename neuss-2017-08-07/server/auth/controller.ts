import { Router, Request, Response } from 'express';
const jwt = require('jsonwebtoken');

const router = Router();
const secret = 'sicher';

export const AuthController = router;

router.post('/login', authenticateWithPassword)
router.post('/authenticate', authenticateWithToken)


function authenticateWithPassword(req: Request, res: Response) {
  if (req.body.user === 'johndoe' && req.body.password === '1234') {
    const options = { algorithm: 'HS256', expiresIn: '2 days' };
    const payload = { user: req.body.user, role: 'member' };
    res.status(200).json({ token: jwt.sign(payload, secret, options) });
  } else {
    res.status(403).send();
  }
}

function authenticateWithToken(req: Request, res: Response) {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) {
      res.status(403).send();
    } else {
      res.status(200).json({ token: req.body.token });
    }
  });
}
