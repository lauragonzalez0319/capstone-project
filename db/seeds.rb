# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding users...'
u1 = User.create(email: "zion@email.com", password: "zionisaman", first_name: "Zion", last_name: "Miller", identify_as: "Man", age: 24, weight: 100, height: "6'0", birth_control_method: "Barrier Method", menstruating: "no")
u2 = User.create(email: "laura@email.com", password: "laura123", first_name: "Laura", last_name: "Gonzalez", identify_as: "Woman", age: 24, weight: 147, height: "5'0", birth_control_method: "Intrauterine Contraception", menstruating: "yes")
puts 'Done seeding users!'

puts 'Seeding events...'
e1 = Event.create(user_id: u2.id, title: "Estimated Period Start", start: "2022-09-07T07:00:00.000Z", end: "2022-09-13T07:00:00.000Z")
puts 'Done seeding events!'