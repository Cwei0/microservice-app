import express, { Express } from "express";
class App {
  private app: Express;

  constructor(public port: number | string) {
    this.app = express();

    this.app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  }
}

export { App };
