var recipes = {base: "rice"};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},{object},{key:})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}