# NextJS | Bootstrap | Context 

This example shows how to use react context api in our app.

Think of the context like a very simple store, in this example, it takes in children and displays them in between the provider. By wrapping the app in the Context, everything inside of the app has access to the context like a store.

We start off by creating the Provider in `context/AppContext.js`
```js
export const AppProvider = createContext()
```

Then we create the component that sits around our app. Notice it takes in children and places them between the provider.
```js
function AppContext({children}) {
    const initialState = {
        data: []
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}
```

Finally, to use the store inside of a component, import the provider into the page you wish to use the store.
```js
import { AppProvider } from '../context/AppContext'
```

Then place the provider into React's useContext. We access state and dispatch, the two variables declared in the provider that wraps the app.
```js
const {state, dispatch} = React.useContext(AppProvider)
```

We see state contains `data: []`, and dispatch is how we update it.
```js
const {data} = state; // declare data into a variable
const changeData = (data) => dispatch({...state, data}) // change state
```

Finally we can update the data with a button.
```js
<button onClick={() => {changeData(['new data'])}}>Click</button>
```

And display it by mapping the data array, and displaying h1 tag.
```js
{data.map((string, i) => {
    return <h1>{string}</h1>
})}
```


## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-context-api)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-context-api&project-name=with-context-api&repository-name=with-context-api)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-context-api with-context-api-app
# or
yarn create next-app --example with-context-api with-context-api-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
