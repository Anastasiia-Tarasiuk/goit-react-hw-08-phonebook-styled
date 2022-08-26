const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsGettingCurrentUser = state => state.auth.isGettingCurrentUser;

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsGettingCurrentUser,
}