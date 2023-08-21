import{url} from '../variable.js'

async function getUser(userName) {
  const response = await fetch(`${url}/${userName}`);
  return await response.json(); /* transforma json em objeto */
}

export{ getUser }