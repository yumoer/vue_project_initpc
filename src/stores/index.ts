import {defineStore} from 'pinia'

export const userNameStore = defineStore('index',{
    state:()=>({
        name:'hao'
    }),
    getters:{
        addName:(state)=> state.name + ' i '
    },
    actions:{
        longName(){
            this.name =  this.name + ' kun '
        }
    }
})
