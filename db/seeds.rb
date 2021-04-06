# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.new
# user1.email = 'curt@email.com'
# user1.encrypted_password = 'password'
# user1.save

# user2 = User.new
# user2.email = 'leslie@email.com'
# user2.encrypted_password = 'password'
# user2.save

users = [
    {
        email: 'curt@email.com',
        password: 'password'
    },
    {
        email: 'leslie@email.com',
        password: 'password'
    }
]

users.each do |attributes|
    User.create attributes
end

apartments = [
    {
        street: '4th Ave',
        city: 'San Diego',
        state: 'CA',
        manager: 'Curt',
        email: 'curt@email.com',
        price: '$1300',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'Not allowed',
        user: User.first
    },
    {
        street: 'Rancho Mission Road',
        city: 'San Diego',
        state: 'CA',
        manager: 'Leslie',
        email: 'leslie@email.com',
        price: '$1600',
        bedrooms: 2,
        bathrooms: 1,
        pets: 'Not allowed',
        user: User.second
    }
]

apartments.each do |attributes|
    Apartment.create attributes
end