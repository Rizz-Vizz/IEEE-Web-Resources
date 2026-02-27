const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

function getTodayDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  
  return dd + '-' + mm + '-' + yyyy;
}

let members = [
  {
    id: 1,
    name: "Walter White",
    usn: "1MS24CH001",
    domain: "Web Resources",
    role: "Technical Lead",
    accessLevel: 5,
    status: "Active",
    joinDate: "09-09-2025",
    discordId: "heisenberg",
    skills: ["Chemistry", "React", "Node.js"],
    portfolioUrl: "https://savewalterwhite.com"
  },
  {
    id: 2,
    name: "Jesse Pinkman",
    usn: "1MS24CH002",
    domain: "Web Resources",
    role: "Member",
    accessLevel: 1,
    status: "Active",
    joinDate: "10-09-2025",
    discordId: "gottacookyo",
    skills: ["Sales", "HTML", "CSS"],
    portfolioUrl: "https://savewalterwhite.com"
  }
];

app.get('/members', (req, res) => {
  res.json(members);
});

app.post('/members', (req, res) => {
  const data = req.body;

  if (!data.name || !data.usn || !data.domain) {
    return res.status(400).json({ error: "Name, USN, and Domain are required fields." });
  }

  if (data.usn.length !== 10) {
    return res.status(400).json({ error: "USN must be exactly 10 characters long." });
  }

  const existingMember = members.find(m => m.usn === data.usn);
  if (existingMember) {
    return res.status(400).json({ error: "A member with this USN already exists!" });
  }

  let newId = 1;
  if (members.length > 0) {
    newId = members[members.length - 1].id + 1;
  }

  const newMember = {
    id: newId,
    name: data.name,
    usn: data.usn,
    domain: data.domain,
    role: data.role || "Member", 
    accessLevel: data.accessLevel || 1, 
    status: data.status || "Active",
    joinDate: getTodayDate(),
    discordId: data.discordId || "",
    skills: data.skills || [],
    portfolioUrl: data.portfolioUrl || ""
  };

  members.push(newMember);

  res.status(201).json({ message: "Member added successfully!", member: newMember });
});

app.put('/members/:usn', (req, res) => {
  const usnToUpdate = req.params.usn;
  const incomingData = req.body;

  const index = members.findIndex(m => m.usn === usnToUpdate);

  if (index === -1) {
    return res.status(404).json({ error: "Cannot update: Member not found with that USN." });
  }

  if (incomingData.role) {
    members[index].role = incomingData.role;
  }
  if (incomingData.accessLevel) {
    members[index].accessLevel = incomingData.accessLevel;
  }
  if (incomingData.skills) {
    members[index].skills = incomingData.skills;
  }
  if (incomingData.status) {
    members[index].status = incomingData.status;
  }

  res.json({ message: "Member updated successfully!", updatedMember: members[index] });
});

app.delete('/members/:usn', (req, res) => {
  const usnToDelete = req.params.usn;
  const index = members.findIndex(m => m.usn === usnToDelete);

  if (index === -1) {
    return res.status(404).json({ error: "Member not found with that USN." });
  }

  members.splice(index, 1);
  res.json({ message: "Member deleted successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});