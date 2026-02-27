import React from 'react';
import TeamCard from './components/TeamCard';

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Ritviz Aggarwal",
      position: "Web Developer",
      chapter: "Web Resources",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEusEbGOGtssA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727191046558?e=1773878400&v=beta&t=t_M3Iq7z5_wpH2uaPdutyCFal-zSzQ6MmAfkR3L_D0k",
      description: "Working on the development of website and here to resolve your queries",
      glowColor: "#3b82f6" 
    },
    {
      id: 2,
      name: "Walter White",
      position: "COOK",
      chapter: "Web Resources",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
      description: "Managing the cooking and purity of website",
      glowColor: "#f97316" 
    },
    {
      id: 3,
      name: "Gustavo Fring",
      position: "Dealer",
      chapter: "Web Resources",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png",
      description: "Ensuring Walter's product reaches the right audience and maintains quality",
      glowColor: "#eab308" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto">        
        <header className="mb-12 text-center">
          <span className="border border-blue-900 bg-blue-900/30 text-blue-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 inline-block">
            Team Section
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our<br/><span className="text-blue-500">Team Members</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Something's always cooking
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.id}
              name={member.name}
              position={member.position}
              chapter={member.chapter}
              imageUrl={member.imageUrl}
              description={member.description}
              glowColor={member.glowColor}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;