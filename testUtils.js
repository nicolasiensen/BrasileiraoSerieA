export const findComponent = (componentTree, params) => {
  if (matchObjects(componentTree, params)) {
    return componentTree;
  } else if (componentTree.children instanceof Array) {
    let result = null;
    for (let i = 0; result === null && i < componentTree.children.length; i++) {
      result = findChild(componentTree.children[i], params);
    }
    return result;
  }
  return null;
};

// Simple function to hold the test expectations until the promises are resolved,
// borrowed from https://github.com/facebook/jest/issues/2136#issuecomment-266817172
export const afterPromises = (done, fn) => {
  setTimeout(() => {
    try {
      fn();
      done();
    } catch (e) {
      done.fail(e);
    }
  }, 0);
};

const matchObjects = (obj1, obj2) => {
  for (let i = 0; i < Object.keys(obj2).length; i++) {
    const key = Object.keys(obj2)[i];
    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) return false;
  }
  return true;
};
