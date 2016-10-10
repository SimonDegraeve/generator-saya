/**
 *
 */
import superb from 'superb';
import { Base } from 'yeoman-generator';
import { slugify, camelize } from 'underscore.string';
import moduleName from './module-name';


/**
 *
 */
export default class extends Base {
  constructor(...args) {
    super(...args);

    this.option('org', {
      type: 'string',
      desc: 'Publish to a GitHub organization account',
    });
  }

  async init() {
    const props = await this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: slugify(this.appname),
        filter: x => moduleName.slugify(x),
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: `My ${superb()} module`,
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        validate: x => (x.length > 0 ? true : 'You have to provide a username'),
        when: () => !this.options.org,
      },
      {
        name: 'cli',
        message: 'Do you need a CLI?',
        type: 'confirm',
        default: false,
      },
    ]);

    const repoName = moduleName.repoName(props.moduleName);

    const tpl = {
      moduleName: props.moduleName,
      moduleDescription: props.moduleDescription,
      camelModuleName: camelize(repoName),
      githubUsername: this.options.org || props.githubUsername,
      repoName,
      name: this.user.git.name(),
      email: this.user.git.email(),
      cli: props.cli,
    };

    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };

    this.fs.copyTpl([
      `${this.templatePath()}/**`,
      '!**/cli.js_',
    ], this.destinationPath(), tpl);

    if (props.cli) {
      this.fs.copyTpl(this.templatePath('src/cli.js_'), this.destinationPath('src/cli.js'), tpl);
    }

    mv('editorconfig', '.editorconfig');
    mv('gitattributes', '.gitattributes');
    mv('gitignore', '.gitignore');
    mv('travis.yml', '.travis.yml');
    mv('package.json_', 'package.json');
    mv('src/index.js_', 'src/index.js');
    mv('src/test.js_', 'src/index.test.js');
  }

  git() {
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['commit', '--allow-empty', '--message', 'noop: Initialize repository']);
  }

  install() {
    this.installDependencies({ bower: false });
  }
}
