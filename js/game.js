// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "",
    levels: {

        start: {
            message: "You wake up from your dream and find yourself dressed like a ninja",
            choices: [
                {
                    text: "GO back to sleep",
                    nextLevel: "bed",
                },

                {
                    text: "Get up from bed",
                    nextLevel: "cry",
                },
            ]
        },

        bed: {
            background_image: "",
            music: "",
            message: "I drank too much last night",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        cry: {
            background_image: "",
            music: "",
            message: "You hear a cry, maybe it's a cry for help...",
            choices: [
                {
                    text: "ignore",
                    nextLevel: "start",
                },
                {
                    text: "Go find who is in need of help",
                    nextLevel:"bush",
                    
                },
            ]
        },
        
        bush: {
            background_image: "",
            music: "",
            message: "You locate the source of the sound coming from inside a bush",
            choices: [
                {
                    text: "walk away",
                    nextLevel: "away",
                },
                {
                    text: "Go find who is in need of help",
                    nextLevel:"vitcim",
                    
                },
            ]
        },
        
        away: {
            background_image: "",
            music: "",
            message: "You are feeling the effects of a hangover, you decided to go back home",
            choices: [
                {
                    text: "*Throws up*",
                    nextLevel: "start",
                },
            ]
        },
        
        vitcim: {
            background_image: "",
            music: "",
            message: "You look inside the bush and find a baby wolf, and is crying",
            choices: [
                {
                    text: "comforte it",
                    nextLevel: "communicate",
                },
                {
                    text: "leave it there",
                    nextLevel:"death",
                    
                },
            ]
        },
        
        communicate: {
            background_image: "",
            music: "",
            message: "You want to ask the baby wolf why is it crying",
            choices: [
                {
                    text: "talk to it",
                    nextLevel: "language",
                },
                {
                    text: "YOu don't speak wolf",
                    nextLevel:"death",
                    
                },
            ]
        },
        
        language: {
            background_image: "",
            music: "",
            message: "You always knew that taking the wolf language class with senpei was not a waste of time. You find out that the wolf is all alone, no one love him.",
            choices: [
                {
                    text: "Be the baby wolf's friend",
                    nextLevel: "pet",
                },
                {
                    text: "YOu don't need a friend",
                    nextLevel:"death",
                    
                },
            ]
        },
        
        pet: {
            background_image: "",
            music: "",
            message: "You became the baby wolf's friend",
            choices: [
                {
                    text: "lived a happy life ",
                    nextLevel: "start",
                },
            ]
        },
        
        death: {
            background_image: "",
            music: "",
            message: "As you turn away and start heading home, you suddenly feel tired, your eyes grow heavier and collapse down to the ground......your dead",
            choices: [
                {
                    text: "call for God",
                    nextLevel: "judgement",
                },
            ]
        },
        
        judgement: {
            background_image: "",
            music: "",
            message: "God heard you, and explains to you that you died from drinking too much last night",
            choices: [
                {
                    text: "heaven",
                    nextLevel:"heaven",
                    
                },
            ]
        },
        
        heaven: {
            background_image: "",
            music: "",
            message: "You tell God that you want to go to heaven, He acknowleges your reqeust. He tells you that if you tell Him one good thing you did in this life, He will bring you to heaven",
            choices: [
                {
                    text: "I didn't help the baby wolf",
                    nextLevel: "hell",
                },
                {
                    text: "I didn't help the baby wolf",
                    nextLevel:"hell",
                    
                },
            ]
        },
        
        hell: {
            background_image: "",
            music: "",
            message: "You fail to provide God with an answer and as a result, you are sent to hell",
            choices: [
                {
                    text: "NOOOOOOOOOOOOOOOOOOOOOoo",
                    nextLevel: "start",
                },
            ]
        },

    }
};
