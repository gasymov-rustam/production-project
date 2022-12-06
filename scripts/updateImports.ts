import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'pages', 'widgets', 'features', 'entities'];

  return layers.some((layer) => value.startsWith(layer));
};

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDecl) => {
    const value = importDecl.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDecl.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
