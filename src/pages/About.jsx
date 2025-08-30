import { Section, Card } from "../components/ui";
import { Heart, Trophy, Utensils, Shield } from "lucide-react";

export default function About() {
  return (
    <Section title="About">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <Card>
          <p className="text-blue-600/90 leading-relaxed">
            I am Mazen El Sedfy, a Software Developer & Data Scientist based in Waterloo, ON, with 5+ years of hands-on experience across startups and major institutions such as the National Bank of Egypt. A Computer Engineering graduate from the Arab Academy for Science and Technology, I've held diverse roles including data center infrastructure engineer, front-end developer, systems engineer, and product developer.
          </p>
          <p className="mt-4 text-blue-600/90 leading-relaxed">
            Currently, I am a Visiting Scholar at the University of Waterloo, researching Large Language Model integration with databases using Python and advanced AI frameworks.
          </p>
          <p className="mt-4 text-blue-600/90 leading-relaxed">
            Passionate about AI, system optimization, and scalable technologies, I thrive on solving complex technical challenges with real business impact. I define myself as a Driven Performer, Logical Resolver, Curious Learner, and Team Player, committed to delivering efficient results and leading teams to success.
          </p>
        </Card>
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/me.jpg"
            alt="Mazen El Sedfy"
            className="w-72 md:w-[26rem] rounded-3xl object-contain border-4 border-orange-500 shadow-xl"
          />
        </div>
      </div>

      {/* Hobbies & Interests Section */}
      <Card className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <Heart className="text-orange-500" size={24} />
          Hobbies & Interests
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/5 border border-blue-600/10">
            <Trophy className="text-blue-600" size={24} />
            <div>
              <h4 className="font-semibold text-blue-600">Football</h4>
              <p className="text-sm text-blue-600/70">FC Barcelona fan</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
            <Utensils className="text-orange-500" size={24} />
            <div>
              <h4 className="font-semibold text-blue-600">Food</h4>
              <p className="text-sm text-blue-600/70">Beef bacon burger</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/5 border border-blue-600/10">
            <Shield className="text-blue-600" size={24} />
            <div>
              <h4 className="font-semibold text-blue-600">Scouting</h4>
              <p className="text-sm text-blue-600/70">Former Boy Scout</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
            <Heart className="text-orange-500" size={24} />
            <div>
              <h4 className="font-semibold text-blue-600">Community</h4>
              <p className="text-sm text-blue-600/70">Team building</p>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}