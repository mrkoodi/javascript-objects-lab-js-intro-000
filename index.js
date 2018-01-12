var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  if (object[key] = value) {
    return object;
  } else if (object.assign({},object,{[key]: value}))
return object;

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
