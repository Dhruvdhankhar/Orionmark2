import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Chandan',
    company: 'Social Media Influencer',
    content: 'MediaBoost transformed our online presence. Our social media engagement has skyrocketed!',
    avatar: 'SJ',
  },
  {
    name: 'Deepanshu',
    company: 'The Dot(Co-Founder)',
    content: 'The web development team at MediaBoost created a stunning website that perfectly represents our brand.',
    avatar: 'MC',
  },
  {
    name: 'Suryansh',
    company: 'Businessman',
    content: 'Our Google Ads campaign managed by MediaBoost has brought in a steady stream of new clients.',
    avatar: 'ER',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;