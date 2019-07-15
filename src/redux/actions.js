import { INCREMENT, DECREMENT } from "./action-types";
//同步 增加
export const increment = (number)=> ({type:INCREMENT,data:number})
//同步 减少
export const decrement = (number)=> ({type:DECREMENT,data:number})
//异步action 增加
export const incrementAsync = (number)=> {
    return dispatch=>{
        //异步代码
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}