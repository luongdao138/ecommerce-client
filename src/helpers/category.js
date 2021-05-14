export const findRootCategories = (list) => {
  return list.filter((x) => !x.parentId);
};

export const generateLinearCategories = (list) => {
  let result = [];

  for (let cat of list) {
    result.push(cat);
    if (cat.children.length > 0) {
      result = [...result, ...generateLinearCategories(cat.children)];
    }
  }

  return result;
};

export const findAllChildren = (cat, list) => {
  const linearCategories = generateLinearCategories(list);
  return linearCategories.filter((x) => x.parentId === cat._id);
};
