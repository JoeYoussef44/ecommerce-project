const router = require('express').Router();
let Card = require('../models/CardInfos');

router.route('/').get((req, res) => {
  Card.find((err ,data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
    ;
});

router.route('/add').post((req, res) => {
  const image = req.body.image;
  const category = req.body.category;
  const description = req.body.description;
  const type = req.body.type;

  const newCard = new Card({
    image,
    category,
    description,
    type,
  });

  newCard.save()
  .then(() => res.json('Card added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.json('Card deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Card.findById(req.params.id)
    .then(card => {
      card.image = req.body.image;
      card.category = req.body.category;
      card.description = req.body.description;
      card.type = req.body.type;

      card.save()
        .then(() => res.json('Card updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;