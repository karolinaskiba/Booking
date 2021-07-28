export default{
    setAuth(state, payload){
        state.token = payload.token;
        state.userId= payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
    }
}