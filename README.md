## Developer notes:

I have spent just about 5 hours on this task, maybe a little more :)! The solution is fully implemented. Unit tests have been written for some various components and functions but the coverage is nowhere near perfect, due to time constraints.
If I was going to spend more time on this, I would have perhaps liked to:
1. Implement the UI mobile first, perhaps by using a CSS framework like [tailwind CSS](https://tailwindcss.com/). The current UI is not responsive.
2. Achieve a higher unit test coverage percentage.
3. Write some [Cypress](https://www.cypress.io/) tests
4. Implement some sort of internationalization/ localization solution.

👨🏻‍💻 Arsam Sarabi <br/>
📧 arsamsarabi@me.com


## Cleo Frontend Interview - Bills
### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of merchants with transactions that have been marked as bills. These can be found at http://localhost:3002/merchants. Merchant's marked as bills, have a flag `isBill` set to `true`.
1. Another tab should show a list of merchants with transactions which are potential bills. These can also be found at http://localhost:3002/merchants. Merchant's that could be potentially bills have a flag `isBill` set to `false`.
1. Under each merchant row for both lists, should be a hidden list of transactions for that merchant. This should show when the merchant row is clicked.
1. Under the name of each merchant should show a count of the transactions for it
1. Add an action to the bills tab for each merchant called "remove bill" which updates the relevant merchant's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3002/merchants/:id` using the id of the merchant to update the resource.
1. Add an action to the potential bills tab for each merchant called "Add as bill" which updates the relevant merchant's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting
