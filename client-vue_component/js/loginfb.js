function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      axios.post('http://localhost:3000/users/loginfb',{
        headers : {
          tokenFb : response.authResponse.accessToken
        }
      })
      .then(data=>{
          console.log(data)
          let token = data.data.token
          let name = data.data.name
          localStorage.setItem('name',name)
          localStorage.setItem('token',token)
          window.location = "http://localhost:8080/home.html"
      })


      testAPI();
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2152635625016218',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    FB.getLoginStatus(function(response) {
      // statusChangeCallback(response);
    });
  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);

    });
  }

  function logout(){
    localStorage.clear()
    FB.logout(function(response){
        statusChangeCallback(response);
    })
    window.location="http://localhost:8080/"
}