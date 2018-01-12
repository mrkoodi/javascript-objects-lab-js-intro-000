var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, obeject, {[key]:value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  return delete object.assign({},object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete[object];
}
