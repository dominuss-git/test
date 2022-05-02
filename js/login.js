const DISCOVERY_DOC = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

// Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
// const CLIENT_ID =
//   "822723435779-entgq7gcoh7lsobv2pjlg1ihbevfsio6.apps.googleusercontent.com";
// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

function onSignIn(googleUser) {
  // const profile = googleUser.getBasicProfile();

  //   localStorage.setItem('name', profile.getName());
  //   localStorage.setItem('email', profile.getEmail());
  //   localStorage.setItem('image', profile.getImageUrl());

  console.log(
    "profile",
    gapi.auth2?.getAuthInstance().currentUser.get().getBasicProfile()
  );
  console.log(
    "token",
    gapi.auth2?.getAuthInstance().currentUser.get().xc.id_token
  );

  localStorage.setItem(
    "token",
    gapi.auth2.getAuthInstance().currentUser.get().xc.id_token
  );
  localStorage.setItem(
    "token",
    gapi.auth2.getAuthInstance().currentUser.get().xc.access_token
  );
  //   console.log('name', profile.getName());
  //   console.log('email', profile.getEmail());
  //   console.log('image', profile.getImageUrl());
  //   console.log('profile', profile);
  //   console.log('googleUser', googleUser);
}

function onClick() {
  console.log(
    "profile",
    gapi.auth2?.getAuthInstance().currentUser.get().getBasicProfile()
  );
  console.log(
    "token",
    gapi.auth2?.getAuthInstance().currentUser.get().xc.id_token
  );
}

function load() {
  gapiLoaded();
}

function gapiLoaded() {
  gapi.load("client", intializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function intializeGapiClient() {
  const API_KEY = localStorage.getItem("token");

  if (!API_KEY || !API_KEY.length) {
    gapiInited = false;
    return;
  }

  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOC,
  });
  gapiInited = true;
}

/**
 * Callback after Google Identity Services are loaded.
 */
// function gisLoaded() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id: CLIENT_ID,
//     scope: SCOPES,
//     callback: "", // defined later
//   });
//   gisInited = true;
//   maybeEnableButtons();
// }

// /**
//  * Enables user interaction after all libraries are loaded.
//  */
// function maybeEnableButtons() {
//   if (!gapiInited && gisInited) {
//     document.getElementById("authorize_button").style.visibility = "visible";
//   }
// }
