export const updateObject =(oldObject, updtdatedProperties) => {
    return{
        ...oldObject,
        ...updtdatedProperties,
    }


}