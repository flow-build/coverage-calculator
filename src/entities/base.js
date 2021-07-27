const { PersistorSingleton } = require("../persist/persist");

class BaseEntity {
  get id() {
    return this._id;
  }
}

class PersistedEntity extends BaseEntity {
  static getEntityClass() {
    throw Error("Subclass not implemented");
  }

  static getPersist() {
    return new PersistorSingleton().getPersistInstance(
      this.getEntityClass().name
    );
  }

  constructor() {
    super();
  }

  getPersist() {
    return this.constructor.getPersist();
  }

  async get() {
    let dbData = await this.constructor.getPersist().getAll();
    return this.deserialized(dbData);
  }

  async getById(id) {
    let dbData = await this.constructor.getPersist().get(id);
    return this.deserialized(dbData);
  }
}

module.exports = {
  BaseEntity,
  PersistedEntity,
};
