module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate files to develop a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name ?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/crafts/{{name}}/{{name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/crafts/{{name}}/index.mdx',
        templateFile: 'templates/index.mdx',
      },
    ],
  })
}
