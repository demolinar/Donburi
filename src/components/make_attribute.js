//Funciones que insertan productos aleatorios a un GenericArrayList

function make_attribute(length, attribute) {
    let result           = '';
    let code             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let codeLength       = code.length;
    for (let i = 0; i < length; i++ ) {
        if(attribute==='name'){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        } else if (attribute==='code'){
            result += code.charAt(Math.floor(Math.random() * codeLength));
        }
    }
    return result;
}

export default make_attribute;