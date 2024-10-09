import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Share2, BarChart2, Globe } from 'lucide-react';

const services = [
  {
    title: 'Social Media Management',
    description: 'Engage your audience and grow your brand with our expert social media strategies.',
    icon: Share2,
  },
  {
    title: 'Digital Advertising',
    description: 'Reach your target audience with precision using our data-driven ad campaigns.',
    icon: BarChart2,
  },
  {
    title: 'Web Development',
    description: 'Create a stunning online presence with our custom web design and development services.',
    icon: Globe,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Strategy development</li>
                  <li>Content creation</li>
                  <li>Performance tracking</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;