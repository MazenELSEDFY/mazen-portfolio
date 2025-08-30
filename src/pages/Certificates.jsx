import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
  // For now, using placeholder images - you can replace these with actual certificate images
  const certificatesWithImages = [
    {
      title: "Mobile App Development with Swift — ITI Egypt (Aug 2023)",
      image: "/swiftcer.jpeg", // Add your certificate image to public/certificates/
    },
    {
      title: "Supervised Machine Learning — DeepLearning.AI & Stanford (Aug 2024)",
      image: "/MLCER.jpeg", // Add your certificate image to public/certificates/
      link: "https://coursera.org/share/05f20590860e354475c9e913369c17cc" // Add certificate verification link if available
    }
  ];

  return (
    <Section title="Certificates" intro="Professional certifications and credentials">
      <div className="space-y-8">
        {certificatesWithImages.map((cert, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Certificate Image */}
              <div className="md:col-span-1">
                <div className="relative group">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-48 object-cover rounded-lg border border-blue-600/20 shadow-md group-hover:shadow-lg transition-shadow duration-200"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-48 bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-lg border border-blue-600/20 items-center justify-center">
                    <div className="text-center">
                      <Award className="mx-auto text-blue-600 mb-2" size={32} />
                      <p className="text-sm text-blue-600/70">Certificate Image</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-3">
                  <Award className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-600 leading-tight mb-2">
                      {cert.title}
                    </h3>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 mt-4">
                      {cert.link && cert.link !== "#" && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Verify Certificate
                        </a>
                      )}
                      
                      <button
                        onClick={() => {
                          // You can implement a modal or lightbox here
                          window.open(cert.image, '_blank');
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        View Full Size
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}