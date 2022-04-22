let genesysWebchat = (function () {
  function createCobrowseConfig() {
    return {
      // Web chat application URL. Use the correct top-level domain for your Genesys Cloud region, i.e. apps.mypurecloud.ie, apps.mypurecloud.jp, apps.mypurecloud.co.uk.
      webchatAppUrl: "https://apps.mypurecloud.com/webchat",

      // Web chat service URL
      webchatServiceUrl: "https://realtime.mypurecloud.com:443",

      // OrgGuid. Needed for co-browse with voice.
      orgGuid: "c8bb9493-2b8c-415a-b7b1-44cef16960f8",

      orgId: "30907",
      orgName: "LatamPS",

      // Log level
      logLevel: "DEBUG",

      // Locale code
      locale: "en",

      // CSS class applied to the security key window, but not its contents
      cssClass: "webchat-frame",
      // Custom style applied to the security key window, but not its contents
      //"css": {
      //},

      // Optional CSS for styling security key form
      //"contentCssUrl": "https://leo-con.github.io/DemoBanColombia/site2/css/cobr.css",
      contentCssUrl:
        "https://leonel1.s3.us-east-2.amazonaws.com/cobr.css?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJGMEQCIBjN6NpQ6z%2FZOW9s6bTtIjXMsD82UFj8BraMvXKgV928AiBo1%2F9rJgOt%2FRbOrRSxN68ty8pC797mZZvmlRbpY3KPvir7AghGEAMaDDgyMzY2OTMzNjA5MSIMPmLMkIgA1im%2BQYbRKtgC%2BtgUefF5Cfuoj%2FlYsOQTcbSr7a4yVmd1gm2j8MA%2FzF5UdjOB36Gv9lk5H03rUv0MUjTYMXNlxTCn0c4CR0KS%2FPTc1lN9gMLWwrwsiugeisWMTi%2FnpspMHca6S%2FMKW7jMXLxpEkwLu%2BDEVd9Ai6nKrKvJiSKVhZfY09bvD0B8b3PdQ0KP1NyQHysBNJKiYbI03nGyaYaarjv88JtxbsODrJ%2Bp6w7mGM9ytO6u4fWCjwzxUIVx%2F7RQbxG8ilvkLn1%2BdGmdcDUCTaGMP7Q6Fd6HOuHsyKhKxkMmnrkSGblGzViZ5RRMG4FWy3s0CKMp1OnyVyf%2BPwgxSQCtk8QQgk2V4%2BSwXESAX3HKVQkr4sRhAM8zDFof4sYQGMB50JycB06fLkYDNtClbMHMTG0oVbQbfw2QS4gWMrpFdW5ogdYm%2B4Kuitf%2Bi4TdirHXi%2BkGwz8qcphdPfB2CFcwgtPkjwY6tAIX%2Bv8es404Z53xG1SjhzRjX58TrRxUW2H6O%2BCQrAK3nuNRv7Jc%2BrCNtAmD%2BkJOAHCb8BAe3HnwznvpkeoCo0EjltZx6DRLXhL%2Fba0UVBzIMvupBbfpZdBa%2BRc2x97ndeXvL%2FuEVq0T9PXTWdGzeEQuanGOTrBN2R3PrUn0HfzrdqXEQB8AZvoGw0fTyoAhRRph%2FPQtfkUtTe3JYQwzlfDIEeMvYrHluuGbsmN1Qk0cROrhVUee0PMOuNvFGcig16ZKT6QdtuOyKn3XyupUwSY0hMj4u6tknm%2F0VSH1BSlPfqkvdCvXEaq2OoX5HoWUAiudmgbcAit2BRh%2Fp%2BWQryAYa%2F4vmiXJ8oWXoPpAC74NOCci7hGYSPahP19w%2BJKdgqFPiuF4FVELI28GlkokUXgOSJCvSA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220201T125110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Credential=ASIA37RUEVANUGXK5QAA%2F20220201%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=0b16c35f5b38c01c92fc3678d0cfa6f1861f84751c8f894aff94ee4306fc362c",

      // Element id where the security key form will appear.
      containerEl: "cobrowse-security-form",

      // Set to true to display security key form. Do not include for co-browse with web chat or for PureConnect co-browse with voice.
      promptForSecurityKey: true,
    };
  }
  return {
    startCobrowse: function () {
      let config = createCobrowseConfig();

      // Can also use callback
      ININ.cobrowse
        .create(config)
        .then(function (result) {
          // Handle success
        })
        .catch(function (err) {
          // Handle failure
        });
    },
  };
})();
