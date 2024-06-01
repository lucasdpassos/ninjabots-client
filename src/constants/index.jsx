import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Nossa Promessa", href: "#" },
  { label: "Tecnologia", href: "#" },
  { label: "Recursos", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Automação Inteligente",
    description:
      "Reduza o tempo de resposta e aumente a eficiência com bots que entendem e respondem às mensagens de forma rápida e precisa.",
  },
  {
    icon: <Fingerprint />,
    text: "Chatbots humanizados",
    description:
      "Proporcione uma experiência mais próxima e empática com bots que simulam conversas humanas, aumentando a satisfação e a fidelização dos clientes.",
  },
  {
    icon: <ShieldHalf />,
    text: "Segurança",
    description:
      "Garanta a proteção dos dados de seus clientes com nossa infraestrutura robusta e protocolos de segurança avançados, mantendo a confidencialidade e integridade das informações.",
  },
  {
    icon: <BatteryCharging />,
    text: "Online 24h",
    description:
      "Esteja disponível para seus clientes a qualquer hora do dia, garantindo que nenhuma oportunidade de venda ou suporte seja perdida.",
  },
  {
    icon: <PlugZap />,
    text: "Integração com sistemas",
    description:
      "Conecte-se facilmente com suas plataformas de CRM, banco de dados, e-commerce, pagamentos e outras ferramentas essenciais, criando um fluxo harmonioso e eficiente.",
  },
  {
    icon: <GlobeLock />,
    text: "Suporte total",
    description:
      "Conte com uma equipe dedicada para ajudar você em todas as etapas, desde a implementação até o suporte contínuo, assegurando que tudo sempre funcione perfeitamente.",
  },
];

export const checklistItems = [
  {
    title: "Meta Business API",
    description:
      "Utilize nossa API oficial e mantenha seu número seguro e funcional sempre, sem risco de banimento do seu assistente virtual",
  },
  {
    title: "Fluxo construído com as stacks mais avançadas do mercado",
    description:
      "Garanta interações rápidas e eficientes com nossos fluxos otimizados e tecnologicamente avançados.",
  },
  {
    title: "Qualificação inteligente de leads",
    description:
      "Inteligencia artificial para filtrar e categorizar leads automaticamente para maximizar suas oportunidades de vendas.",
  },
  {
    title: "Um assistente virtual completo",
    description:
      "Ofereça uma experiência personalizada e envolvente com um assistente virtual que vai além das respostas automáticas.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Primeiros Passos" },
  { href: "#", text: "Whitepaper" }
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Blog Ninj.AI" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Brindes" },
  { href: "https://www.facebook.com/profile.php?id=61560003614730", text: "Facebook" },
  { href: "#", text: "Instagram" },
];
