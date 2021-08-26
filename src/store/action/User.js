export const Buttonvalue=(value)=>{
    return{
        type:"BUTTON_VALUE",
        payload:value
    }
}

export const dataId=(id)=>{
    return{
        type:"RECIPE_ID",
        Id:id
    }
}

export const SearchData=(data)=>{
    return{
        type:"SEARCH_DATA",
        item:data
    }
}

export const nutritionId=(data)=>{
    return{
        type:"NUTRIENT_DATA",
        nutrition:data
    }
}
