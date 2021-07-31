const express = require('express')
const axios = require('axios')
const router = express.Router()
const Job = require('../models/job')

router.get('/', (req, res) => {
  Job
    .findAll()
    .then(jobs => res.json(jobs))
})

router.post('/', (req, res) => {
  const role = req.body.role
  const company = req.body.company
  const close_date = req.body.date
  const contact_person = req.body.contact
  const notes = req.body.notes
  const status = req.body.status

  Job.create(role, company, close_date, contact_person, notes, status)
    .then(job => {
      res.json(job)
    })
})

router.patch('/:id', (req, res) => {
  const role = req.body.role
  const company = req.body.company
  const close_date = req.body.date
  const contact_person = req.body.contact
  const notes = req.body.notes
  const status = req.body.status
  const id = req.params.id

  Job.edit(role, company, close_date, contact_person, notes, status, id)
    .then(job => {
      res.json(job)
    })

})

module.exports = router