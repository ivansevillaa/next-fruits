import DataBase from '@database/db';

const listFruits = async (req, res) => {
  const database = new DataBase();
  const fruits = await database.list();
  const length = fruits.length;

  res.status(200).json({ length, fruits })
}

export default listFruits;