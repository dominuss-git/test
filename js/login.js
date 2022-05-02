function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();

  localStorage.setItem('name', profile.getName());
  localStorage.setItem('email', profile.getEmail());
  localStorage.setItem('image', profile.getImageUrl());

  const token = gapi.client.getToken();
  console.log(token)
  
  console.log('name', profile.getName());
  console.log('email', profile.getEmail());
  console.log('image', profile.getImageUrl());
  console.log('profile', profile);
  console.log('googleUser', googleUser);
}