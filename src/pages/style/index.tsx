import { useRouter } from "next/router"

import  Cookies  from "js-cookie"
import { cookies } from "next/headers"
import { useEffect, useState } from "react"

// export default function Nextjs(){
//     return(<>
//     <h1>hii</h1>
    
//     </>)
// }

export default function Trainingpage(){
    const router =useRouter()
    const [student,setStudent]=useState(false)
    useEffect(()=>{
if(student)
    {
        Cookies.set('Name',"solomon")
        Cookies.set('Name',"seike")
    }
    })

    return(
        <>
        <span onClick={()=>{router?.push('/style/123')}}>style {Cookies.get('Name')}</span>
        <span onClick={()=>{setStudent(true)}}>hi</span>
        </>
    )

}