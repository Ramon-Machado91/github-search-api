import{getUser} from './services/user.js'
import{getRepos} from './services/repositories.js'
import{user} from './objects/user.js'
import{screen} from './objects/screem.js'

const busca = document.getElementById("input-search");
const button = document.getElementById("btn-search");

button.addEventListener("click", () => getUserData(busca.value));


busca.addEventListener("keyup", (e) => {
  const userName = e.target.value;
  


  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if(userName.length === 0){
      alert('Preencha o campo do usuário do Github')
    }
    getUserData(userName);
  }
});

async function getUserData(userName) {

   const userResponse = await getUser(userName);
   const respositoriesResponse = await getRepos(userName);
   
   user.setInfo(userResponse)
   user.setRepositories(respositoriesResponse)
   screen.renderUser(user)
   
}




