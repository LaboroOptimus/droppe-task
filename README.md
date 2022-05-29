# Developer at Droppe - React refactoring task

## What has been improved?
- Improved typing
- Added useful packages - axios and classnames. Removed lodash (used native js methods instead)
- I moved the common components that can be used in the application later to the common folder. Using these components in the future, you can avoid code repetition and speed up the application (due to the fact that new components are not created, links to old ones are used instead)
- Removed optional styles and html tags
- Сhanged the project structure - now the components are in the 'components' folder and the screens are in the 'containers' folder. In the future, this will allow you to more conveniently manage the codebase.
- Fixed the logic of adding a product to favorites (now the product is added to favorites by the id field). If it was added by the title field, this could cause incorrect behavior if the titles of the products were the same.
- Changed the logic of http requests: 1) moved the requests to a separate file (api.ts); 2) added request status processing (LoadingStatus). Thanks to this, you can get rid of some variables in useState (for example, when we showed "Addign post ...")
- Used scss instead of css. later in the project, you can use mixins to set the font / color and other repetitive things
- Rewrote the class component to a functional one
- Other minor edits that I don't remember :)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
