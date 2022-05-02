function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('name', profile.getName());
  console.log('email', profile.getEmail());
  console.log('image', profile.getImageUrl());
  console.log('profile', profile);
  console.log('googleUser', googleUser);
}