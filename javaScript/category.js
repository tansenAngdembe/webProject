import { apiData } from "./api";


export const categoryData =async ()=>{
    const data = await apiData()
    data.forEach(value => {
        const {category} = value;
        let  singleValue =new Set(category)
        console.log(singleValue)
    });
}
