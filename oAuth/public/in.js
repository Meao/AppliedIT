
    //The URLSearchParams interface defines utility methods to work with the query string of a URL.
    //An object implementing URLSearchParams can directly be used in a for...of structure
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('id')) {
        document.querySelector('#link').style.display = 'none'
        document.querySelector('img').src = urlParams.get('picture')
        document.querySelectorAll('p')[0].innerHTML = `Hi, ${urlParams.get('given_name')}!`
        document.querySelectorAll('p')[1].innerHTML = `Full name: ${urlParams.get('name')}`
        document.querySelectorAll('p')[2].innerHTML = `Email: ${urlParams.get('email')}`
      } else {
        document.querySelector('#user-info-wrapper').style.display = 'none'
      }
  
  
      async function getClientId() {
        const redirectUri = 'http://localhost:3000/oauth2callback'
        const scope = 'profile email openid'
        const responseType = 'code'
  
        const response = await fetch('clientId')
        const json = await response.json()
        document.querySelector('#link').href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${json.clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=offline&include_granted_scopes=true`
      }
      getClientId()

      //https://medium.com/better-programming/log-in-with-the-google-oauth-demo-app-9e7d0e801c29
