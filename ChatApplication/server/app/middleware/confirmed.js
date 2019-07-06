

exports.confimed=(req, res) =>
{
    console.log(req.body)
    res.status(200).send({'message':'email verfication is confirmed'})

}