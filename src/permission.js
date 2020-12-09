import router from "./router";

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requireAuth)){
        const userInfo = sessionStorage.getItem("userInfo")
        if(userInfo!=null){
            next();
        }
        else{
            next({
                path:'/login'
            })
        }
    }
    else{
        next()
    }
})
