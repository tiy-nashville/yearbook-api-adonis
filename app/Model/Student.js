'use strict'

const Lucid = use('Lucid')

class Student extends Lucid {


  cohort() {
    return this.belongsTo('App/Model/Cohort', 'id', 'cohort_id');
  }
}

module.exports = Student
