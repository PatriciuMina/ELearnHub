# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
School.create(name: 'Universitatea Babes', domain: 'ubb')
#School.create(name: 'Universitatea Tehnica', domain: 'utcn')

User.create(name: 'ubb', email: 'ubb@ubb.com', password: 'ubbubb', password_confirmation: 'ubbubb', school_id: 1, domain: 'ubb', role: 'admin')
User.create(name: 'teacher', email: 'teacher@teacher.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'teacher')
User.create(name: 'andrei', email: 'andrei@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'marius', email: 'marius@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'george', email: 'george@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'maria', email: 'maria@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'ioana', email: 'ioana@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'sandor', email: 'sandor@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'carmen', email: 'carmen@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'raul', email: 'raul@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'phineas', email: 'phineas@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'xenia', email: 'xenia@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')
User.create(name: 'sandra', email: 'sandra@ubb.com', password: '123123', password_confirmation: '123123', school_id: 1, domain: 'ubb', role: 'student')

#User.create(name: 'utcn', email: 'utcn@utcn.com', password: 'utcnutcn', password_confirmation: 'utcnutcn', school_id: 2, domain: 'utcn', role: 'admin')


#Lesson.create(name: 'lesson1', text:'something', course_id:1, teacher_id:1, school_id:1)