'use strict'

const Lucid = use('Lucid')

class Cohort extends Lucid {


  students() {
    return this.hasMany('App/Model/Student', 'id', 'cohort_id');
  }
}

module.exports = Cohort
