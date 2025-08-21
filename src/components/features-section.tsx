import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Zap, Shield, Users, Smartphone, Headphones } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with customers worldwide through our scalable platform designed for international growth.",
    badge: "Popular"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
    badge: "New"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee to keep your business running smoothly.",
    badge: "Trusted"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team using our intuitive tools and real-time synchronization.",
    badge: ""
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access everything from any device with our responsive design and native mobile applications.",
    badge: ""
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team available around the clock.",
    badge: "Premium"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make us the preferred choice for businesses worldwide. 
            Built with modern technology and designed for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                  {feature.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
            <div className="text-sm text-gray-500">Trusted by</div>
            <div className="flex items-center gap-6">
              <span className="font-semibold text-gray-700">10,000+</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}