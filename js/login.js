// const DISCOVERY_DOC = [
// "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
// ];

// Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
// const CLIENT_ID =
//   "822723435779-entgq7gcoh7lsobv2pjlg1ihbevfsio6.apps.googleusercontent.com";
// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// window.onload = onSignIn

function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();

  //   localStorage.setItem('name', profile.getName());
  //   localStorage.setItem('email', profile.getEmail());
  //   localStorage.setItem('image', profile.getImageUrl());

  console.log(
    "profile",
    gapi.auth2?.getAuthInstance().currentUser.get().getBasicProfile()
  );
  console.log("token", googleUser.getAuthResponse().id_token);

  localStorage.setItem("token", googleUser.getAuthResponse().id_token);
  // localStorage.setItem(
  // "access_token",
  // gapi.auth2.getAuthInstance().currentUser.get().xc.access_token
  // );
  //   console.log('name', profile.getName());
  //   console.log('email', profile.getEmail());
  //   console.log('image', profile.getImageUrl());
  //   console.log('profile', profile);
  //   console.log('googleUser', googleUser);
}

function onClick() {
  const currentDay = new Date(Date.now());

  var event = {
    summary: "Google I/O 2015",
    location: "800 Howard St., San Francisco, CA 94103",
    description: "A chance to hear more about Google's developer products.",
    start: {
      dateTime: new Date(currentDay.getMilliseconds() + 1000 * 60).toUTCString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: new Date(currentDay.getMilliseconds() + 1000 * 60 * 60).toUTCString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [{ email: "iceandrise@gmail.com" }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  console.log(event);

  var request = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });

  request.execute(function (event) {
    appendPre("Event created: " + event.htmlLink);
  });
}

// function load() {
// gapiLoaded();
// }

// function gapiLoaded() {
// gapi.load("client", intializeGapiClient);
// }

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
// async function intializeGapiClient() {
//   const API_KEY = localStorage.getItem("token");

//   if (!API_KEY || !API_KEY.length) {
//     gapiInited = false;
//     return;
//   }

//   await gapi.client.init({
//     apiKey: API_KEY,
//     discoveryDocs: DISCOVERY_DOC,
//   });
//   gapiInited = true;
// }

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
