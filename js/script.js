console.log(transformarATipos([1, "casa", {}])); //imprime ['number', 'string', 'objet']
console.log(transformarATipos([function () { }, true])); //imrpime ['function', 'boolean']

function transformarATipos(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado[i] = typeof array[i];
    }
    return resultado;
}