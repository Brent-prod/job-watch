const express = require('express')
const router = express.Router()
const Job = require('../models/job')
const validateJob = require('../middlewares/jobs/validate_jobs')


router.get('/', (req, res) => {
  // console.log(req.session)
  Job
    .findAllByUser(req.session.userId)
    .then(jobs => res.json(jobs))
})


router.post('/', validateJob, (req, res) => {
  const role = req.body.role
  const company = req.body.company
  const close_date = req.body.date
  const ad_link = req.body.link
  const contact_person = req.body.contact
  const notes = req.body.notes
  const status = req.body.status
  const userId = req.session.userId

  Job.create(userId, role, company, ad_link, close_date, contact_person, notes, status)
    .then(job => {
      res.json(job)
    })
})

router.patch('/:id', (req, res) => {
  const role = req.body.role
  const company = req.body.company
  const close_date = req.body.date
  const ad_link = req.body.link
  const contact_person = req.body.contact
  const notes = req.body.notes
  const status = req.body.status
  const id = req.params.id
  console.log(close_date)

  Job.edit(role, company, ad_link, close_date, contact_person, notes, status, id)
    .then(job => {
      res.json(job)
    })

})

router.delete('/:id', (req, res) => {
  Job.delete(req.params.id)
    .then(() => {
      res.json({deleted : `job with id ${req.params.id}`})
    })
})

module.exports = router