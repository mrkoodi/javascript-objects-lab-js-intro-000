var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var 
  if (object[key] = value) {
    return object;
  } else if (object.assign({},object,{[key]: value}))


}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 delete object[key];
 return object;

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
