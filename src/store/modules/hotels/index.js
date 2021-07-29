import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state(){
        return{
          hotels:[],
            // hotels:[
            //   {

            //     name: 'Nazwa1',
            //     address: 'lublin',
            //     rooms:[
            //         {
            //             nr: '1',
            //             beds: '2',
            //             floor:'0',
            //             rate: 1,
            //             price: '1235',
            //             desc:'jsfhasihfasihf'
            //         },
            //         {
            //          nr: '1',
            //          beds: '2',
            //          floor:'0',
            //          rate: 1,
            //          price: '1235',
            //          desc:'jsfhasihfasihf'
            //      },

            //     ]
            //  },
            //       {
            //         id: 'c2',
            //         firstName: 'Julie',
            //         lastName: 'Jones',
            //         areas: ['frontend', 'career'],
            //         description:
            //           'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
            //         hourlyRate: 30
            //       }
            // ]


        }
    },
    mutations,
    actions,
    getters
}