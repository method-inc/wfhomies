DONE
1. Created a slack app from developer.slack.com
2. Creating a heroku instance for our webhook -> https://wfhomies.herokuapp.com/
3. Create a github repo -> https://github.com/Skookum/wfhomies
4. Connected that repo to a heroku instance -> https://dashboard.heroku.com/apps/wfhomies/deploy/github
5. Installed app to workspace (Sidebar -> Install App)
6. Tested that our command executes
7. Initialized npm
8. Installed packages npm i body-parser express request-promise-native string-tokenizer url-regex
9. Created our server.js
10. Created our express server
11. Created start script, ran it, express server works
12. Deployed to heroku, monitored in local cli using `heroku logs --tail --app wfhomies`
13. Our express server is correctly logging requests from our slash command!
14. Return a response to the client (slack) with res.send()
15. Added eslint to enforce code quality in the editor
16. Removed extra files, lets modularize as we go
17. Converted to Typescript!  Use `npm run build:watch` to continually build as you go.  Final build output is now in the `dist/` directory.
18. Changed eslint to typescript-eslint.  Changed eslint options to reflect that.
19. Added conditionals to `server.ts` to cover the `home`, `office`, `remote`, and `everyone` commands, as well as any errors.
20. Created a Firebase account and Firebase DB schema for `Users`.
21. `postToDb` function to send the json from Slack to Firebase.
22. Created `services.ts` file to handle REST api functions, and moved over `postToDb()`.
23. Decided to scrap Firebase. Removed associated files.

TODO
1. ◻️ Post to the database
2. ◻️ Pull from the database
3. ◻️ Show that data in slackbot
4. ◻️ Make it pretty
5. ◻️ Get the Web view working via github pages (placeholder html something something)
6. ◻️ Build web view to show today's data
7. ◻️ Scroll through prev days data 

STRETCH
1. View reports on old data
2. View averages etc
3. Auto /wf status (for recurring events)