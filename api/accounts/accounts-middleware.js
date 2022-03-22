const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body

  if (!name || !budget) {
    res.status(400).json({
      message: 'name and budget are required',
    })
  } else if (trimmed < 3 || trimmed > 100) {
    res.status(400).json({
      message: 'name of account must be between 3 and 100',
    })
  } else if ( typeof budget != 'number' ) {
    res.status(400).json({
      message: "budget of account must be a number",
    }) 
  } else if (budget < 0 || budget > 1000000) { 
    res.status(400).json ({
      message: "budget of account is too large or too small",
    })
  }
  else {
    next();
  }

}

  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)


exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
