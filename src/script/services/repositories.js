import{url,repositoriesQuantity} from '../variable.js'
async function getRepos(userName) {
    const response = await fetch(
      `${url}/${userName}/repos?per_page=${repositoriesQuantity}`
    );
    return await response.json(); /* transforma json em objeto */
  }

  export{getRepos}