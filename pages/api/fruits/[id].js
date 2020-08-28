import DataBase from '@database/db';

const getFruit = async (req, res) => {
  const database = new DataBase();

  const fruitId = req.query.id;
  const fruit = await database.getById(fruitId);

  res.status(200).json(fruit)

}

export default getFruit;
