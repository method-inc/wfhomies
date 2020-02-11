1. Created a slack app from developer.slack.com
2. Creating a heroku instance for our webhook -> https://wfhomies.herokuapp.com/
3. Create a github repo -> https://github.com/Skookum/wfhomies
4. Connected that repo to a heroku instance -> https://dashboard.heroku.com/apps/wfhomies/deploy/github
5. Installed app to workspace (Sidebar -> Install App)
6. Tested that our command executes
7. Initialized npm
8. Installed packages npm i body-parser express request-promise-native string-tokenizer url-regex
9. Created our server.js
10. Created supporting submodules (slashCommand, handleStatus, commandParser)
11. Created our express server
12. Created start script, ran it, express server works
13. Deployed to heroku, monitored in local cli using `heroku logs --tail --app wfhomies`
14. Our express server is correctly logging requests from our slash command!
15. Return a response to the client (slack) with res.send()
16. Added eslint to enforce code quality in the editor
17. Removed extra files, lets modularize as we go
18. Converted to Typescript!  Use `npm run build:watch` to continually build as you go.  Final build output is now in the `dist/` directory.
19. Changed eslint to typescript-eslint.  Changed eslint options to reflect that.