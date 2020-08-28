// Dummy Data Base
import data from './data';

class DataBase {
  constructor() { };

  list = async () => {
    await randomDelay();
    return Object.values(data);
  }

  getById = async (id) => {
    if (!Object.prototype.hasOwnProperty.call(data, id)) {
      return null
    }

    await randomDelay();
    return data[id];
  }
}

// Let's add a delay to make it a bit closer to reality
const randomDelay = () => {
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })
}


export default DataBase;
