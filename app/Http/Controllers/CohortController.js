'use strict';

const Cohort = use('App/Model/Cohort');

class CohortController {

  * index(request, response) {
    const cohorts = yield Cohort.with('students').fetch();

    response.send({ cohorts });
  }

  * store(request, response) {
    const input = request.only('start_date', 'name');
    const cohort = yield Cohort.create(input);

    response.send({ cohort });
  }

  * show(request, response) {
    const id = request.param('id');
    const cohort = yield Cohort.with('students').where({ id }).firstOrFail();

    response.send({ cohort });
  }

  * update(request, response) {
    const input = request.only('start_date', 'name');
    const id = request.param('id');

    const cohort = yield Cohort.with('students').where({ id }).firstOrFail();
    cohort.fill(input);
    yield cohort.save(input);

    response.send({ cohort });
  }

  * destroy(request, response) {
    const id = request.param('id');
    const cohort = yield Cohort.query().where({ id }).firstOrFail();
    yield cohort.delete();

    response.status(204).send();
  }

}

module.exports = CohortController;
