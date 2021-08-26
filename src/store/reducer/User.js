const initialState={
   data:null,
   id:"",
   
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "BUTTON_VALUE":
            return{
                ...state,
                data:action.payload
            }
        case "RECIPE_ID" :
            return{
                ...state,
                id:action.Id
            }   
        case "SEARCH_DATA":
            return{
                ...state,
                search:action.item
            } 
        case "NUTRIENT_DATA":
            return{
                ...state,
                nutritionId:action.nutrition
            }        
        default:
            return {
                state
            }
    }
}

export default userReducer;