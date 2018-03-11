var recipes = {base: "rice"};

function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  var newObject = object
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}