'use strict';

const Student = use('App/Model/Student');

class StudentController {

  * index(request, response) {
    const students = yield Student.with('cohort').fetch();

    response.send(students);
  }

  * store(request, response) {
    const input = request.only('name', 'email', 'phone', 'cohort_id');
    const student = yield Student.create(input);

    response.send(student);
  }

  * show(request, response) {
    const id = request.param('id');
    const student = yield Student.with('cohort').where({ id }).firstOrFail();

    response.send(student);
  }

  * update(request, response) {
    const input = request.only('name', 'email', 'phone', 'cohort_id');
    const id = request.param('id');

    const student = yield Student.with('cohort').where({ id }).firstOrFail();
    student.fill(input);
    yield student.save(input);

    response.send(student);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const student = yield Student.query().where({ id }).firstOrFail();
    yield student.delete();

    response.status(204).send();
  }

}

module.exports = StudentController;
