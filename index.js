const names = ["Sadio Mane", "Bobby Firmino", "Mo Salah"];

const showNames = function(name) {
  for (let index = 0; index < name.length; index++) {
    const peopleName = name[index];
    console.log(`[${index + 1}] ${peopleName}`);
  }
};
showNames(names);

const lfcPlayer = ["Sadio Mane", "Bobby Firmino", "Mo Salah"];

const filterNames = function(player, minimumLength) {
  let newNames = [];
  for (let index = 0; index < player.length; index++) {
    const striker = player[index];

    if (striker.length >= minimumLength) {
      newNames.push(striker);
    }
  }
  return newNames;
};
const filteredNames = filterNames(lfcPlayer, 10);
console.log(filteredNames);

const myContacts = [
  {
    id: 1,
    name: "Sadio Mane",
    phone: "+44 12345678",
    email: "sadio@Mane.com"
  },
  {
    id: 2,
    name: "Bobby Firmino",
    phone: "+44 910111213",
    email: "bobby@firmino.com"
  },
  {
    id: 3,
    name: "Mo Salah",
    phone: "+44 1415161718",
    email: "mo@salah.com"
  }
];
const showContacts = function(myContacts) {
  for (let index = 0; index < myContacts.length; index++) {
    const contacts = myContacts[index];
    console.log(
      `[${contacts.id}], ${contacts.name}, (${contacts.phone}), <${
        contacts.email
      }>`
    );
  }
};
showContacts(myContacts);

const filterContacts = function(myContact, minimumNameLength) {
  let newContacts = [];
  for (let index = 0; index < myContact.length; index++) {
    const contact = myContact[index];
    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact);
    }
  }
  return newContacts;
};
const filteredContacts = filterContacts(myContacts, 10);
console.log(filteredContacts);
