import Http from "../services/Http";

export const state = () => ({
    badges: [],
});

export const mutations = {
    badges(state, badges) {
        state.badges = badges;
    }
};

export const actions = {
    async refresh({commit}) {
        let badges = await Http.for('badge').get('all');

        commit('badges', badges);
    },
};
