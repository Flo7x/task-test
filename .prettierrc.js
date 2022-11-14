module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.component.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
  ],
};
