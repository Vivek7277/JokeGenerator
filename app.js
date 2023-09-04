const btnEL = document.getElementById('btn')

const jokeEl = document.getElementById('joke')

const apiKey = 'vo8ZudUikcFYvPN02Ce+sQ==8r8bMarAARrZIBS9'

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
}

const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1'

async function getJoke() {
  try {
    jokeEl.innerText = 'Uploading...'
    btnEL.Disabled = true
    btnEL.innerText = 'Loading...'
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEL.Disabled = false
    btnEL.innerText = 'Tell Me a Joke!'
    // console.log(data[0].joke);
    jokeEl.innerText = data[0].joke
  } catch (error) {
    jokeEl.innerText = 'A error happened , try again later'
    btnEL.Disabled = false
    btnEL.innerText = 'Tell Me a Joke!'
    console.log(error)
  }
}
btnEL.addEventListener('click', getJoke)
