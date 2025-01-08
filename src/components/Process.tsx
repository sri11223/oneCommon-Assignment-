import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Step 1: Select your dream model',
    description: 'Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.',
    image: 'https://s3-alpha-sig.figma.com/img/71d5/9506/50dc026ce12a98dc6e836d992646e8b0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I95Ljb0LVzISccA28l3PsZDtrjDqlWv9uyq205xOswQdjtRG92N1QwjdRiSjZBJYkauPqIUD7XzIpzVfV3NTtZQ8TghC1x0VRydVJjM3pqpKJMvYHlAoj-O0cqTMdbJnZvZRJpYquT1qWYTZ6F9vHutD8QmOQem6C4pYjgfhJlibCffEAsOh8kDTH7JCT-TLn~Q2SlWlrj1n6yvcvs5tOp5LOvzjjZk6WmW7pnyxgf4znjZXn~7CZL68QB9rjJ07Cb5QeJG9dyX1uHlpUwbabaf9bR0xYGK9BZwAHRKkGGCUmuulItxedFDssO7ldBubqowTdBMZeLwmLfVRAQC0-Q__'
  },
  {
    title: 'Step 2: Customize to your requirement',
    description: 'Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.',
    image: 'https://s3-alpha-sig.figma.com/img/beb5/9753/1f3e61ca1880d2cf00db36420cdc6c9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHEEAn1lvDwjM9W09W9Yw33X9hGH-x7D9YeE34~79Bfe6~PutAHJXqRbivpIF~29r2km-CiaaN94zMZWBV~nvebMCdfsjlnXUa91ZFeolLo9g29JyXtsqRh6LSVgRjo-AqXBMLXZbfTNWHOdfdZXFqSiuNpyEOj8dVzBQzsUqziBXfCrkXMvLxGvPjW0M7fZQ43uZJU5AAEMq--zvn82WwBTm7H9LO07XikIJyefGqkuPsMqOWWblvoHmeVy43YNC-8i31IlekmhR0tzjcAK-j0po0PYefDsiK4EbR3FXPKUch1Qd7nZaEy13gTm2ZhjVK-QanwUUOBa4EKE6YrU-g__'
  },
  {
    title: 'Step 3: Order confirmation',
    description: 'Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.',
    image: 'https://s3-alpha-sig.figma.com/img/1b8c/2ebb/15c88cd61da0ecbeb9f6a4a6d8ec13b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqAnJ0vhuM2ECU4UpzaiqU0o5FcoE05O42MuFZLcfHZM12z06WT1AANM5npMJ~25IT2tj2l-34ykNaaIZcsYtHNzYYfG0Gl0-RsZI3BwCGNNTGFzvaWDn6vs-0KYNwnbYLVr3YsDs~tamQASfoqaO9Zm775GU5Y~ObXf5DT6HgwakICDVauetHJJEbCInnh9uti6YF7GrjFd4ukJkP-ssOTpzsnjUetU-tudn1OHefKfzukELbYw5Ia4hVCcgPZYStsjMAzg-y50yXK28oa54dRVlQSstGTEuj2dCPXIOYrXmWfez9f6CCil7MWD4eJlHpm50piXP5W15vl4ngfPhA__'
  },
  {
    title: 'Step 4: Quality check',
    description: 'Enjoy seamless delivery and professional installation services with every purchase.',
    image: 'https://s3-alpha-sig.figma.com/img/a73e/f206/26effcd84f7b413cfcfe8c582f0f0019?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C88thAkoW5cMa2KrhBpi~YHNBfnbaZa0ogrl3y04OeYAZg-MkYv0pwDWoBJ~ArUu1gPBkA6XgRgb-bnXoe82MgEX3lTZ-DBs8w-bECOv7NRd7h9llQQTdqDKVChfw4hFNvCfSqd7QX4SO67TOB2O80TSBJVZFBWmmuICO9yyzIE8K3OkwwDeymBa81D1gVxNyOPf-Iqi-QM6oXjal7Zpr7-2OWYdNM~LU~hKjiIBU1UmJ6Hqk~NwFx4BVFDiZ8~OeI3V6TDsdtWFpytc9uCX4BnyZHVAGwTbRMk6OwG6a5PviB5C7NOdQqNFAqPrhIOf60jGpLlXVAioSOwzI-kCYQ__'
  },
  {
    title: 'Step 5: Order processing',
    description: 'Your order is carefully reviewed and processed to ensure all details are correct before moving forward.',
    image: 'https://s3-alpha-sig.figma.com/img/a521/7d5a/374d2413f630d3fc70fc0bff87623517?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTnzmGLrFzPAk1J8szDz77QyWVhQN1CfUvCJlA9E1p2G3CRPLNyW8X5P~YCLp3X-CV5Y5LLdyyS5MoPMC8dDDi8CxI-p3ru4eUTqlbuEk-XJh1-E1RJgyzR60OS595D26YRc59Nzm~muOl9HBDtvlvbR8UU~XGerM4HTRP0QhIQ0OPflDngg~4ChBwkqFLU2qrxMCRHqG7WJc9z0oyUmEdyzSSwntMJ0xB34LHuBRdZ5y-dqb6Bcq8CK5ANLcGY0SOKLO7EIcyr89O3s6SyhYlcDNSlSNL3VlmiL0bqB4iiVovK6JURCrlI7PHOENpwxm-0KC~amJ7jhUkKl4EEJrQ__'
  },
  {
    title: 'Step 6: Delivery',
    description: 'Our commitment to quality ensures your satisfaction with every piece you choose.',
    image: 'https://s3-alpha-sig.figma.com/img/329f/a842/4b5dfa67130d242c3e12026cb43b95c0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AD1K71VXoExzsBOCMYkzb7D~pZR6G-bOes4DVvpAKK2vPR09OEnAtti9Lw786eF7vJ9Lr8BP9qUn5g2~5Nxsl5f6gwxZscZYD7tx-37IfsKYSJFuAERFdFjXiE4RuluMFi7VttO2~zjrkkCvxwDkMpDVSvT5G643CwXqTA8OEi46QArHu-5MF17l5eGYNhtdeAn6rvJsd4vIcfWKnKxPJ2dQ-ZDz2ie1Qcd4CHvBPTqPGehKWqDQ2nM2TWqZJkBK4Sj4Bg8hvQJ2FDwyFy3w7bAc0lWJGQrFcv3Mq9wLv0EdK-IqI~UVZHQInw5Vl97W8Z9XvW8E4xkjJRVcHwltdQ__'
  }
];

export default function Process() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-6">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-30 h-40 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
