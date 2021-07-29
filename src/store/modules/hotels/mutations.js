export default{
    addHotel(state, payload){
        state.hotels.push(payload);
    },
    getHotels(state, payload){
        state.hotels = payload;
    }
}