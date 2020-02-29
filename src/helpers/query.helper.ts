/**
 * 
 * @param rawData 
 * @param structure { name: "structureName", type: "Object|Array"}
 */

export const queryMapping = (rawData: any[], structure: any) => {
    let data: any = {};
    for (let i = 0; i < rawData.length; i++) {
        const el = rawData[i];
        if(i == 0){
            if(structure.type === "Array"){
                data[structure.name] = [];
                data[structure.name][i] = {}
            }else if(structure.type === "Object"){
                data[structure.name] = {};
            }
            
            for(let prop in el){
                if(!prop.startsWith(structure.name)){
                    data[prop] = el[prop];
                }else{
                    if(structure.type === "Array"){
                        let temp = {};
                        temp[prop] = el[prop];
                        data[structure.name][i] = Object.assign(data[structure.name][i], temp);
                    }else if(structure.type === "Object"){
                        let temp = {};
                        temp[prop] = el[prop];
                        data[structure.name] = Object.assign(data[structure.name], temp);
    
                    }
                }
            }

        }
    }

    return data
};