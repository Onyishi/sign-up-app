/* eslint-disable eol-last */

const express = require('express')
const router = express.Router()
const SignUpTemplateCopy = require('../models/signupmodels')

router.post('/signup', (request, response) => {
  const signedUpUser = new SignUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password
  })
  signedUpUser.save()
    .then(data => {
      response.json(data)
    })
    .catch(error => {
      response.json(error)
    })
})

module.exports = router