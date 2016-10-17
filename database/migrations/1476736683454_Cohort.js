'use strict';

const Schema = use('Schema');

class CohortSchema extends Schema {

  up() {
    this.create('cohorts', (table) => {
      table.increments();
      table.date('start_date');
      table.string('name');
      table.timestamps();
    });
  }

  down() {
    this.drop('cohorts');
  }

}

module.exports = CohortSchema;
