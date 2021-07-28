export default{
   async login(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwuGUOsp7tzqPy0aCwuoSwd0yiGduiK84',
            {
                method: "POST",
                body: JSON.stringify({
                    email:payload.email,
                    password: payload.password,
                    returnSecureToken: true

                })
            }
        )

        const responseData = await  response.json();
        if(!response.ok){
            console.log(responseData)
            const error = new Error (responseData.message  || 'Failed to authenticate. Check your login data');
            throw error;
        }
        console.log(responseData);


    context.commit('setAuth', {
        token: responseData.idToken,
        userId:  responseData.localId,
        tokenExpiration : responseData.expiresIn,
    } )
}
}