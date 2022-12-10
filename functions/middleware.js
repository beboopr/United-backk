import jwt from 'jsonwebtoken'
import { secretKey } from '../secrets.js'

export function isUserReallyUser(req,res, next) {
    //getting token from header
    const token = req.headers.authorization
    // verify and decode
 const decodedToken = jwt.verify(token, secretKey)
    // now check that the uid they're requesting to patch is the one in there token
 const requestedUid = req.params.uid
    //verifying uid
 if(decodedToken.uid !== requestedUid) {
  res.status(401).send({message: 'Not authorize' })
  return
 }
 // all is good.. go come on in.. 
 req.decoded = decodedToken
 next()
}