const { useState } = require("react")

const useInput=(property)=>   {

const[value,setValue]=useState("")


const onChange=(e)=> {
setValue(e.target.value)



}

return{value,onChange}




}


export default useInput