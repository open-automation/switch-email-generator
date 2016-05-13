# switch-email-generator
Generate nice HTML emails for Enfocus Switch

## Installation
- Install gulp globally (npm install gulp -g)
- Install dependancies (npm install)

## Usage
- Run "gulp"
    - This will build all emails and place them in the _./dist._ directory.
    - It will also watch for any file changes and re-build.
- Add new jade templates to _./src/emails/_. Each of these jade templates represents an email that will be generated with Gulp.
- Add HTML emails in Switch and link to the files in the _./dist/_ directory. When you update the emails in the future, you won't have to re-link anything within your Switch flows.
