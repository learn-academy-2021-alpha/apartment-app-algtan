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
        user: User.first,
        street: '4th Ave',
        city: 'San Diego',
        state: 'CA',
        manager: 'Curt',
        email: User.first.email,
        price: '$1300',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'Not allowed',
        image_url: 'https://images1.apartments.com/i2/jPaMur8gVaj8hd7M96e3uNDeeIhVKEEIihwStCD4dug/116/3725-3729-4th-ave-san-diego-ca-building-photo.jpg?p=1'
    },
    {
        user: User.second,
        street: 'Rancho Mission Road',
        city: 'San Diego',
        state: 'CA',
        manager: 'Leslie',
        email: User.second.email,
        price: '$1600',
        bedrooms: 2,
        bathrooms: 1,
        pets: 'Not allowed',
        image_url: 'https://ssl.cdn-redfin.com/photo/45/bigphoto/426/190065426_0.jpg'
    }
]

apartments.each do |attributes|
    Apartment.create attributes
end