/* 
  Agradecimento ao Gessé Carlos (gesse-carlos) pela criação dessa função!
  https://github.com/tryber/sd-014-c-project-blogs-api/pull/6/files
*/

const checkCategories = (categories, categoryIds) => {
  const categoriesInDb = categories.map(({ id }) => id);

  return categoryIds.every((category) => categoriesInDb.includes(category));
};

module.exports = checkCategories;
