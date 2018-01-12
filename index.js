var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object.assign({}, object,);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 delete object.key;
 return object;

}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
