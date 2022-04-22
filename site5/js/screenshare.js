let genesysWebchat = (function() {
    function createChatConfig(){
        // Required if reconnects are enabled
        window.PURECLOUD_WEBCHAT_FRAME_CONFIG = {
            containerEl: 'chatContainer'
        };
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('customerEmail').value;
        //let firstName = $('#firstName').val();
        //let lastName = $('#lastName').val();
        //let email = $('#customerEmail').val();

        // For additional web chat config options, see web chat documentation. This example excludes some of the optional values.
        return {
            // Web chat application URL
            "webchatAppUrl": "https://apps.mypurecloud.com/webchat",

            // Web chat service URL
            "webchatServiceUrl": "https://realtime.mypurecloud.com:443",

            // Numeric organization ID
            "orgId": 30907,

            // Organization name
            "orgName": "latamPS",

            // Target agent email (OPTIONAL)
            //"agentEmail": agentEmail,

                // Queue Name
            queueName : "LeonelContreras_Queue",

            // Log level
            "logLevel": "DEBUG",

            // Locale code
            "locale": "es",
             
            // Whether to allow reconnects
            reconnectEnabled: true,
            //Allowed reconnect origins
            reconnectOrigins: ['https://lableo2.com', 'https://leo-con.github.io','https://github.io'],


            // Logo used at the top of the chat window
            "companyLogo": {
                "width": 600,
                "height": 149,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-large-cea5ee47.png"
            },

            // Logo used within the chat window
            "companyLogoSmall": {
                "width": 149,
                "height": 149,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-small-9c9fe09b.png"
            },

            // Image used for agent
            "agentAvatar": {
                "width": 462,
                "height": 462,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/agent-e202505f.png"
            },

            // Text displayed when the chat window opens
            "welcomeMessage": "Gracias por escribirnos.",

            // CSS class applied to the chat window
            "cssClass": "webchat-frame",

            // Custom style applied to the chat window
            "css": {
                "width": "100%",
                "height": "100%"
            },
            data:{
                firstName : firstName,
                lastName : lastName,
                email : email
            }

            //// Deployment key for your cobrowse deployment from PureCloud admin UI
            //"cobrowseConfig": {
            //   "deploymentKey": "g6VVHnWCx2jPe0Vl4pzwollWXiJqnHoI",
            //}
        };
    }
    return {
        startEmbeddedChat: function() {
            let chatConfig = createChatConfig();
            let DemoTipo = document.getElementById("DemoTipo").value; 
            if(DemoTipo === "cobrowse"){
                chatConfig.cobrowseConfig = { "deploymentKey": "g6VVHnWCx2jPe0Vl4pzwollWXiJqnHoI" }; 
            }
            ININ.webchat.create(chatConfig, function(err, webchat) {
                if (err) {
                    console.error('Unable to share page', (err.stack || err));
                    return;
                }
                //webchat.updateConfig({
                //    data.firstName: "Leonel"
                //    
                //});

                //Render to frame
                webchat.renderFrame({
                    containerEl: 'chatContainer'
                });

            });
        }
    }
})();