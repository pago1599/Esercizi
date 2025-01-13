const user = { id: 1, name: `John` };
const userPosts = [`Post 1`, `Post 2`, `Post 3`];

function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log(`Recupero dati utente in corso...`);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        resolve(user);
      } else {
        reject(`Errore durante il recupero dei dati utente.`);
      }
    }, 2000);
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    console.log(
      `Recupero post per l'utente ${userName} (ID: ${userId}) in corso...`
    );
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (userPosts.length && isSuccess) {
        resolve(userPosts);
      } else {
        reject(`Errore durante il recupero dei post dell'utente.`);
      }
    }, 3000);
  });
}

fetchUserData()
  .then((user) => {
    console.log(
      `Dati utente recuperati con successo: ${user.name} (ID: ${user.id})`
    );
    fetchUserPosts(user.id, user.name).then((posts) => {
      console.log(`Post dell'utente recuperati con successo:`);
      posts.forEach((post) => {
        console.log(`${post}`);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
