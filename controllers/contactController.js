const Contactus = require('../models/Contactus');


module.exports.contact_post = (req,res) => {
    const { name, email, message } = req.body;
    console.log(req.body);
    Contactus.create({ name, email, message })
        .then((result) => {
            res.redirect('/success');
        })
        .catch((err) => {
            console.log(err);
        });
}