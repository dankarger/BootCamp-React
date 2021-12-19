this.setState(
    {
        todos: [
            ...this.state.todos,
            {
                id: new Date().valueOf(),
                mission,
            },
        ],
    },
    () => {
        window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
);