/* Simulating an API call that returns the user's information, including app access, not sure if this is the best way to go about it*/
/* The hasAccess variable to style the cards and makes it so clicking the respective card opens an info modal rather than emitting an event*/

function userData() {
  return { 
    // GET request goes here
    user: {
      userName: "Ottawa Police Service",
      imgURL: "https://media.glassdoor.com/sqll/480589/ottawa-police-service-ontario-squarelogo-1452072039289.png"
    },
    apps: [
      {
        appName: "Public Safety Vault",
        // fullDesc is the long description for desktop/tablet size
        fullDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building. The system uses mobile phone numbers that are correlated to municipal addresses but are not visible or accesible by police.",
        // shortDesc is a shorter description for mobile sizes
        shortDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building.",
        hasAccess: false,
        stretch: true,
        classId: "psv"
      },
      {
        appName: "Your-Safety-First",
        fullDesc: "Public safety app available for free download from the App Store and Google Play Store. Your-Safety-First is not social media. It is a trusted disciplined alerting system designed to keep people out-of-harms-way.",
        shortDesc: "A trusted disciplined alerting system designed to keep people out-of-harms-way.",
        hasAccess: true,
        stretch: false,
        classId: "ysf"
      },
      {
        appName: "Critical Infrastructure Intelligence Initiative (Ci3)",
        fullDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building. The system uses mobile phone numbers that are correlated to municipal addresses but are not visible or accesible by police.",
        shortDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building.",
        hasAccess: false,
        stretch: false,
        classId: "ci3"
      },
      {
        appName: "Targeted Emergency Notification System (TENS)", /* Name of the app, to be displayed in the card header */
        fullDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building. The system uses mobile phone numbers that are correlated to municipal addresses but are not visible or accesible by police.",
        shortDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building.",
        hasAccess: false,
        stretch: false,
        classId: "tens" /* The classId is used to apply a specific class to the card header as we loop over the array */
      },
      {
        appName: "Trusted Video",
        fullDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building. The system uses mobile phone numbers that are correlated to municipal addresses but are not visible or accesible by police.",
        shortDesc: "Text message notification system used by police to communicate directly with the registered emergency contacts of a building.",
        hasAccess: false,
        stretch: false,
        classId: "cctv"
      },
    ],
  };
};

userData();