/* eslint-disable eol-last */

const express = require('express')
const router = express.Router()

router.post('/signup', (request, response) => {
  response.send('send')
})

module.export = router