import { createStore } from "vuex";
import axiosClient from '../axios'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        showSidebar: true,
    },
    getters: {},
    actions: {
        async updateUserProfile({ commit, state }, updatedUserData) {
            const { data } = await axiosClient.post('/update-user-profile', updatedUserData, {
                headers: {
                    Authorization: `Bearer ${state.user.token}`,
                },
            });
    
            commit('setUser', data); // Update user data with the response
            return data;
        },
        async updateUserImage({ commit, state }, imageFormData) {
            delete user.image_url;
            const { data } = await axiosClient.post('/update-image', imageFormData, {
                headers: {
                    Authorization: `Bearer ${state.user.token}`,
                },
            });
            commit('setUser', data);
            return data;
        },
        async register({ commit,  }, user) {
            const { data } = await axiosClient.post('/register', user);
            commit('setUser', data);
            return data;
        },
        async login({ commit }, user) {
            const { data } = await axiosClient.post('/login', user);
            commit('setUser', data);
            return data;
        },
        async logout({ commit }, user) {
            const response = await axiosClient.post('/logout');
            commit('logout');
            return response;
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state,userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        },

        setShowSidebar(state, value) {
            state.showSidebar = value;
          },
    }, 
    modules: {}
});

export default store;