exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          title
        }
      }
    }
  `);

  result.data.allContentfulProject.nodes.forEach((project) => {
    createPage({
      path: `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
      component: require.resolve("./src/templates/project.js"),
      context: { title: project.title },
    });
  });
};
