// server.js
require('dotenv').config();  // Load environment variables from .env
const mongoose = require('mongoose');
const Contact = require('./models/contact');  // Import the Contact model

// Connect to MongoDB using the connection string in .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
//Create Many Contacts
const createManyContacts = async () => {
  const contacts = [
    {
      fullName: 'John Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: 1234567890,
      birthdate: new Date('1990-05-15').getTime(),
    },
    {
      fullName: 'Jane Smith',
      email: 'jane.smith@gmail.com',
      phoneNumber: 9876543210,
      birthdate: new Date('1985-03-25').getTime(),
    },
    {
      fullName: 'Alice Johnson',
      email: 'alice.johnson@gmail.com',
      phoneNumber: 5555555555,
      birthdate: new Date('2000-10-10').getTime(),
    },
    {
      fullName: 'Bob Brown',
      email: 'bob.brown@gmail.com',
      phoneNumber: 4444444444,
      birthdate: new Date('1992-11-30').getTime(),
    },
  ];

  try {
    // Insert multiple contacts at once
    const savedContacts = await Contact.insertMany(contacts);
    console.log('Multiple contacts saved:', savedContacts);
  } catch (err) {
    console.error('Error saving contacts:', err);
  }
};


// Search for a Contact by Email
const searchContact = async (email) => {
  try {
    const contact = await Contact.findOne({ email: email });
    if (contact) {
      console.log('Contact found:', contact);
    } else {
      console.log('No contact found with this email');
    }
  } catch (err) {
    console.error('Error searching for contact:', err);
  }
};

// Update a Contact's Phone Number by Email
const updateContact = async (email, newPhoneNumber) => {
  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { email: email }, 
      { phoneNumber: newPhoneNumber },
      { new: true }  // Return the updated contact
    );
    if (updatedContact) {
      console.log('Updated contact:', updatedContact);
    } else {
      console.log('No contact found with this email');
    }
  } catch (err) {
    console.error('Error updating contact:', err);
  }
};

// Delete a Contact by Email
const deleteContact = async (email) => {
  try {
    const removedContact = await Contact.findOneAndDelete({ email: email });
    if (removedContact) {
      console.log('Removed contact:', removedContact);
    } else {
      console.log('No contact found with this email');
    }
  } catch (err) {
    console.error('Error removing contact:', err);
  }
};

// Example calls to test the functions

// Uncomment to create a new contact
//createManyContacts(); 

// Uncomment to search for a contact
//searchContact('bob.brown@gmail.com'); 

// Uncomment to update a contact's phone number
//updateContact('john.doe@gmail.com', 1781911654);

// Uncomment to delete a contact
//deleteContact('alice.johnson@gmail.com');
