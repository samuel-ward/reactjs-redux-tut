import React, { Component } from 'react';
import store from './redux/store';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions';

class App extends Component {

    test() {
        console.log(store.getState())
        const unsubscribe = store.subscribe(() => console.log(store.getState()))

        store.dispatch(addTodo('Learn about actions'))
        store.dispatch(addTodo('Learn about reducers'))
        store.dispatch(addTodo('Learn about store'))
        store.dispatch(toggleTodo(0))
        store.dispatch(toggleTodo(1))
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

        unsubscribe()
    }

    render () {
        this.test();
        return <button></button>
    }
}

export default App;