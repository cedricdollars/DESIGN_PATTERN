interface Visitor {
  visitFolder(folder: Folder): void;
  visitFile(files: Files): void;
}

interface IFolder {
  accept(visitor: Visitor): void;
}
interface IFiles {
  accept(visitor: Visitor): void;
}

class Folder implements IFolder {
  accept(visitor: Visitor) {
    console.log(`folder being visited`);
    visitor.visitFolder(this);
  }
}
class Files implements IFiles {
  accept(visitor: Visitor) {
    console.log(`Files being visited`);
    visitor.visitFile(this);
  }
}

class Repository implements Visitor {
  public count: number = 0;
  visitFolder(folder: Folder) {
    return this.count++;
  }
  visitFile(files: Files) {
    return this.count++;
  }
}

function Main() {
  let files: Files = new Files();
  let folder: Folder = new Folder();

  files.accept(new Repository());
}
Main();
