export class GenesysActorSheet extends ActorSheet {
  get data() {
    return this.actor.data.data;
  }

  constructor(...args) {
    super(...args);
  }

  getData() {
    const data = super.getData();

    return data;
  }
}
