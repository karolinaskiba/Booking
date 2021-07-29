export default{
    hotels(state){
        return state.hotels;
    },
    hasHotels(state){
        return state.hotels && state.hotels.length > 0;
    }
    
}