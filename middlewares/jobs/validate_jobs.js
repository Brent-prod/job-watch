function validationError(message) {
  const error = new Error(message);
  error.status = 422;
  return error;
}

function validateJob(req, res, next) {
  const role = req.body.role
  const company = req.body.company
  const close_date = req.body.date
  const contact = req.body.contact

  // TODO should probably be "isBlank(role)" - write a method
  if (role === '' || role === undefined || role === null) {
    throw validationError("Role is required");
  }
  else if (company === '' || company === undefined || company === null) {
    throw validationError("Company is required");
  }
  else if (close_date === '' || close_date === undefined || close_date === null) {
    throw validationError("Close Date is required");
  }
  else if (contact === '' || contact === undefined || contact === null) {
    throw validationError("Contact is required");
  }

  next();
}

module.exports = validateJob;