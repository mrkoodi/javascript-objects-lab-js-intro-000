var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obeject, {[key]:value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = object.assign(object,key);
  return delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
