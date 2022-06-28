import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { applyToUpdateRecorder } from '@schematics/angular/utility/change';
import * as ts from 'typescript';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Adding library module...');
    const modulePath = '/src/app/app.module.ts';

    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`${modulePath} does not exist...`);
    }

    const recorder = tree.beginUpdate(modulePath);

    const content = tree.read(modulePath);

    if (content === null) {
      throw new SchematicsException(`${modulePath} does not exist...`);
    }

    const sourceFile = ts.createSourceFile(
      modulePath,
      content.toString(),
      ts.ScriptTarget.Latest,
      true
    );

    applyToUpdateRecorder(
      recorder,
      addImportToModule(
        sourceFile,
        modulePath,
        `NgxProgressIndicatorModule.forRoot({ color: '#0083ff', size: 2 })`,
        'ngx-progress-indicator'
      )
    );

    tree.commitUpdate(recorder);

    context.logger.info('Installing dependencies...');
    context.addTask(new NodePackageInstallTask());

    return tree;
  };
}
