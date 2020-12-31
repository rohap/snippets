/**
    use dot-notation string to access array key
    if the path not exists, def (default) is returned

    const arr = {'a': 'b', 'c': [{'d':'e', 'f':'g'}, {'d':'h', 'f':'i'}]};
    let x = array_get(arr, 'c.0.d')   // e
    let x = array_get(arr, 'a')   // b
    let x = array_get(arr, 'c.0.k', [])   // []
*/
function array_get(arr, key, def) {
    if (typeof def === 'undefined') {
        def = null;
    }
    if (!key) return arr;

    var s = key.split('.');

    var o = arr;

    for (var x = 0; x < s.length; x++) {
        if (null !== o && o.hasOwnProperty(s[x])) {
            o = o[s[x]];
        } else {
            return def;
        }
    }

    return o;
}
