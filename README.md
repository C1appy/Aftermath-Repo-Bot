# Simple Discord Bot

My very taped together in 10 minutes of my old repo bot for Aftermath Gameworks Underground server **THIS IS NOT A OFFICIAL BOT BY THEM SIMPLY A FAN MADE ONE**

## Prerequisites

Before setting up the bot, make sure you have the following:

- [Node.js](https://nodejs.org) installed on your machine.

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/C1appy/Aftermath-Repo-Bot.git
```

    Navigate to the project directory.

cd simple-discord-bot

    Install the required dependencies using npm (Node Package Manager).

npm install

Creating a Discord Bot

To use this bot, you need to create a bot application in the Discord Developer Portal. Follow these steps:

    Go to the Discord Developer Portal.

    Click on "New Application" and give it a name.

    Navigate to the "Bot" tab on the left sidebar.

    Click on "Add Bot" and confirm.

    Under the bot section, you can customize the bot's name and picture if desired.

    Make sure to enable the necessary bot permissions based on the functionality you want to implement.

    Scroll down to the "Token" section, and click on "Copy" to copy your bot's token.

Setting up the Token

    In the project directory, rename the .env.example file to .env.

    Open the .env file in a text editor.

    Replace YOUR_BOT_TOKEN_HERE with the token you copied from the Discord Developer Portal.

    Save the .env file.

Running the Bot

    In the project directory, run the following command:


node .

    Your bot should now be online and ready to use.

Customizing the Bot

Feel free to modify the bot.js file to add your custom functionality or commands. The bot uses the discord.js library, so refer to its documentation for further customization options.