# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all #This refreshes db when restarting rails

users = User.create([ #this posts a new user (or a bulk of users)
  {
    name: 'aCa',
    password: 'aaaa'
  },
  {
    name: 'b@b.co',
    password: 'bbbb'
  },
  {
    name: 'c@c.co',
    password: 'cccc'
  }
])
