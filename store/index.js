export const state = () => ({
    menuToggle: false,
    pages: null,
    settings: null,
    lang: 'en'
})

export const mutations = {
    sideMenuToggle(state, status) {
        state.menuToggle = status
    },
    settings(state, status) {
        state.settings = status
    },
    pages(state, status) {
        state.pages = status
    },
    SET_LANG(state, lang) {
        state.lang = lang
    }
}
export const getters = {
    getTodoById: (state) => (id) => {
        return state.todos.find((todo) => todo.id === id)
    },
    sections: (state) => {
        if (state.pages) {
            return state.pages.filter((el) => {
                return el.type === 'page'
            })
        }
    },
    services: (state) => {
        if (state.pages) {
            return state.pages.filter((el) => {
                return el.type === 'service'
            })
        }
    }
}
