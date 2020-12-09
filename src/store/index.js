import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token:localStorage.getItem("token"),
    role:sessionStorage.getItem("role"),
    userInfo:JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    // SET_TOKEN:(state,token)=>{
    //   state.token = token
    //   localStorage.setItem("token",token)
    // },
    SET_ROLE:(state,role)=>{
      state.role=role;
      sessionStorage.setItem("role",role)
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo=userInfo;
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO:(state)=>{
      // state.token='';
      // localStorage.setItem("token",'');
      state.role='';
      state.userInfo={};
      sessionStorage.setItem("role",'')
      sessionStorage.setItem("userInfo",JSON.stringify(''))
    },
  },
  getters:{
    getRole:state => {
      return state.role
    }
  },
  actions: {
  },
  modules: {
  }
})
