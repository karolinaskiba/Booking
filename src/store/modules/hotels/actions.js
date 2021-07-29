export default{
    async addHotelAction(context, data){
      const hotelData = {
          id:new Date(),
          name: data.name,
          address: data.address,
          description: data.description
      };
     const response = await fetch(`https://booking-app-f7e38-default-rtdb.firebaseio.com/hotels/${hotelData.id}.json`,{
          method: 'PUT',
          body:JSON.stringify(hotelData)
      });


        if(!response.ok){
            //err
      }

      context.commit('addHotel', hotelData);
    },

    async loadHotels(context){
        const response = await fetch(`https://booking-app-f7e38-default-rtdb.firebaseio.com/hotels.json`)
        const resposeData = await response.json();

        if(!response.ok){
            //err
      }
      const hotels = [];

      for(const key in resposeData){
          const hotel = {
              id:key,
            name: resposeData[key].name,
            address: resposeData[key].address,
            description: resposeData[key].description
          }

          hotels.push(hotel)
      }
      context.commit('getHotels', hotels)

    },

}