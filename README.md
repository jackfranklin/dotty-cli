# Dotty

A small utility for quickly creating dotfiles in a project.

Currently supports creating:

- `.gitignore`
- `.travis.yml` 
- `.editorconfig`
- `.jshintrc`

## Usage

```sh
npm install --global dotty-cli
```

Dotty works by looking for templates for each file type you want to create. The default location is `~/.dotty`. In there it expects to find a folder for each filetype, with a number of templates inside. For example:

```
~/.dotty/
    .gitignore/
        default
        node
    .travis.yml/
        node
        ruby
```

If you ask Dotty to generate a file but do not tell it which template to use, it will use "default". To create a `.gitignore` file for example, you would do:

```sh
dotty --gi
```

Which would create a `.gitignore` file in your current working directory, copying the file contents of `~/.dotty/.gitignore/default` into it. If you wanted to use a different template, you could do:

```sh
dotty --gi node
```

Which would use the contents of `~/.dotty/.gitignore/node`.

Of course, you can generate more than one file at once:

```sh
dotty --ec --tv node
```

That would generate:
- `.editorconfig`, using the default template
- `.travis.yml`, using the node template

## Filetypes and their flags

- `.gitignore` : `--gi`
- `.jshintrc` : `--jh`
- `.travis.yml` : `--tv`
- `.editorconfig` : `--ec`
