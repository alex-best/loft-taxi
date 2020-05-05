import routeReducer from './reducer';
import { getRouteSuccessRequest, getRouteFailureRequest, clearRoute } from './actions';

describe('Route reducer:', () => {
    const state = {}

    it('successful request', () => {
        const action = {
            type: getRouteSuccessRequest.toString(),
            payload: ['coords']
        }

        const { coords } = routeReducer(state, action);

        expect(coords).toEqual(['coords']);
    })

    it('failure request', () => {
        const action = {
            type: getRouteFailureRequest.toString()
        }

        const { coords } = routeReducer(state, action);

        expect(coords).toBeNull();
    })

    it('clear route:', () => {
        const initialState = {
            coords: ['123', '123', '123']
        }

        const action = {
            type: clearRoute.toString()
        }

        const { coords } = routeReducer(initialState, action);

        expect(coords).toBeNull();
    })

    it('unknown action type passed', () => {
        const initialState = {
            coords: ['123', '123', '123']
        }

        const action = {
            type: 'UNKNOWN TYPE'
        }

        const result = routeReducer(initialState, action);

        expect(result).toEqual(initialState);
    })
})