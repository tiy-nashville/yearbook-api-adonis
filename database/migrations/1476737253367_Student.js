'use strict';

const Schema = use('Schema');

class StudentSchema extends Schema {

  up() {
    this.create('students', (table) => {
      table.increments();
      table.string('name');
      table.string('email');
      table.string('phone');
      table.integer('cohort_id').references('cohorts.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('students');
  }

}

module.exports = StudentSchema;
