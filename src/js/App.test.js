/* eslint-env jasmine:true */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'inferno-redux'
import { render } from 'inferno'
import InfernoTestUtils from 'inferno-test-utils'
import App from './App'
import { initialState } from './reducers/Main.reducer'

const { scryRenderedVNodesWithType } = InfernoTestUtils
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('App.js file', () => {
    let store

    beforeEach(() => {
        store = mockStore(initialState)
    })

    it('renders without crashing', () => {
        const vNodeTree = (
            <Provider store={store}>
                <App/>
            </Provider>
        )
        const renderedTree = render(vNodeTree, document.getElementById('app'))
        scryRenderedVNodesWithType(renderedTree, App)
    })
})
