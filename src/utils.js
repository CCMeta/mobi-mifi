// const server = 'http://192.168.1.1/api'
const server = '/d/'

const method = 'post'
const mode = 'cors'// Access-Control-Allow-Origin: http://ccmeta.com:3000
const credentials = 'include'// Access-Control-Allow-Credentials: true 

export async function fetching(body) {
  let res = null;
  if (server == '/d/') {
    //local
    res = await fetch(server + body)
    if (body.indexOf("=1") === -1) {
      // window.location.href = '#'
    }
  } else {
    // remote
    const options = {
      method,
      body,
      mode,
      credentials,
      // headers,
    }
    res = await fetch(server, options)
  }

  try {
    return JSON.parse(await res.text())
  } catch (error) {
    console.log(error)
    return null
  }
}



