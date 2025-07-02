import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Phone,
  Settings,
  Truck,
  Award,
  Users,
  Wrench,
  Shield,
  MapPin,
  Clock,
  Mail,
  Menu,
  X,
  Cog,
  Zap,
  Car,
  Bike,
  ShoppingCart,
  CheckCircle,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bike className="text-red-600 text-3xl" />
              <span className="font-heading font-bold text-2xl text-black">
                RN Motos
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("parts")}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Peças
              </button>
              <button
                onClick={() => scrollToSection("coverage")}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Cobertura
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Contato
              </button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700 font-medium"
                onClick={() => {
                  const message =
                    "Olá! Gostaria de solicitar um atendimento da RN Motos, peças e serviços. Podem me ajudar?";
                  const phoneNumber = "5598983499234";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Solicitar Serviço
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-left"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("parts")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-left"
                >
                  Peças
                </button>
                <button
                  onClick={() => scrollToSection("coverage")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-left"
                >
                  Cobertura
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-left"
                >
                  Contato
                </button>
                <Button
                  className="bg-red-600 text-white hover:bg-red-700 font-medium w-fit"
                  onClick={() => {
                    const message =
                      "Olá! Gostaria de solicitar um atendimento da RN Motos, peças e serviços. Podem me ajudar?";
                    const phoneNumber = "5598983499234";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  Solicitar Serviço
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
                Sua Moto em{" "}
                <span className="text-yellow-400">Perfeitas Condições</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-100 leading-relaxed">
                Manutenção preventiva e corretiva especializada em motocicletas,
                com busca gratuita em toda a cidade. Peças originais e garantia
                total nos serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold hover-scale w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  <Phone className="mr-2" size={20} />
                  Agendar Manutenção
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-red-600 hover:bg-white hover:text-red-600-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover-scale font-bold w-full sm:w-auto"
                  onClick={() => scrollToSection("services")}
                >
                  <Settings className="mr-2" size={20} />
                  Ver Serviços
                </Button>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-8 pt-4">
                <div className="text-center">
                  <div className="font-bold text-xl sm:text-2xl">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Motos Atendidas
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl sm:text-2xl">100%</div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Satisfação
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl sm:text-2xl">24h</div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Atendimento
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Oficina profissional de motocicletas"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover floating-animation"
              />
              <Card className="absolute -bottom-6 -left-2 sm:-left-6 bg-white text-black shadow-lg w-11/12 sm:w-auto">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3">
                    <Wrench className="text-red-600 text-2xl" />
                    <div>
                      <div className="font-bold">Busca Gratuita</div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Em toda a cidade
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-black mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para manter sua motocicleta sempre
              em perfeito funcionamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            <Card className="service-card bg-white shadow-lg">
              <CardContent className="p-8">
                <Wrench className="text-red-600 text-4xl mb-6" />
                <h3 className="font-heading font-bold text-xl text-black mb-4">
                  Manutenção Preventiva
                </h3>
                <p className="text-gray-600 mb-6">
                  Revisões programadas, troca de óleo, filtros, velas e todos os
                  itens necessários para manter sua moto sempre nova.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Troca de óleo e filtros
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Verificação de freios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Ajuste de corrente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Inspeção geral
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card bg-white shadow-lg">
              <CardContent className="p-8">
                <Settings className="text-red-600 text-4xl mb-6" />
                <h3 className="font-heading font-bold text-xl text-black mb-4">
                  Manutenção Corretiva
                </h3>
                <p className="text-gray-600 mb-6">
                  Diagnóstico preciso e reparo especializado em motor,
                  transmissão, sistema elétrico e todos os componentes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Reparo de motor
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Sistema elétrico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Transmissão
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Suspensão
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card bg-white shadow-lg">
              <CardContent className="p-8">
                <Truck className="text-red-600 text-4xl mb-6" />
                <h3 className="font-heading font-bold text-xl text-black mb-4">
                  Busca e Entrega
                </h3>
                <p className="text-gray-600 mb-6">
                  Buscamos sua motocicleta em qualquer lugar da cidade e
                  devolvemos após o serviço, sem custo adicional.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Busca gratuita
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Entrega grátis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Toda a cidade
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Seguro total
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    Garantia Total nos Serviços
                  </h3>
                  <p className="text-lg mb-6">
                    Todos os nossos serviços possuem garantia de 90 dias.
                    Utilizamos apenas peças originais e nossa equipe é
                    certificada.
                  </p>
                  <Button
                    className="bg-white text-red-600 hover:bg-gray-300 font-bold"
                    onClick={() => scrollToSection("contact")}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Mecânico profissional trabalhando em motocicleta"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-black mb-6">
                Atendemos Toda a Cidade
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa equipe móvel busca sua motocicleta em qualquer bairro da
                região metropolitana e a leva até a oficina para um diagnóstico
                completo, garantindo praticidade e comodidade.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      Cobertura Completa
                    </h4>
                    <p className="text-gray-600">
                      Atendemos todos os bairros e regiões da cidade, incluindo
                      zona rural.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      Atendimento Rápido
                    </h4>
                    <p className="text-gray-600">
                      Tempo médio de chegada de 30 minutos em emergências.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      Seguro Total
                    </h4>
                    <p className="text-gray-600">
                      Sua moto está protegida durante todo o transporte e
                      manutenção.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="../../assets/logo.jpeg"
                alt="Cobertura de atendimento na cidade"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <Card className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white shadow-lg w-10/12 sm:w-auto">
                <CardContent className="p-2 sm:p-4">
                  <div className="text-center">
                    <div className="font-bold text-xl sm:text-2xl text-red-600">
                      30min
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Tempo médio de busca
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Section */}
      <section id="parts" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-black mb-4">
              Peças Originais e Compatíveis
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as melhores marcas do mercado, garantindo
              qualidade e durabilidade para sua motocicleta
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="bg-white shadow-lg hover-scale">
              <CardContent className="p-6 text-center">
                <Cog className="text-red-600 text-3xl mb-4 mx-auto" />
                <h4 className="font-bold text-lg text-black mb-2">Motor</h4>
                <p className="text-gray-600 text-sm">
                  Pistões, anéis, válvulas, juntas e componentes do motor
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover-scale">
              <CardContent className="p-6 text-center">
                <Car className="text-red-600 text-3xl mb-4 mx-auto" />
                <h4 className="font-bold text-lg text-black mb-2">Freios</h4>
                <p className="text-gray-600 text-sm">
                  Pastilhas, discos, fluidos e sistemas de frenagem
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover-scale">
              <CardContent className="p-6 text-center">
                <Zap className="text-red-600 text-3xl mb-4 mx-auto" />
                <h4 className="font-bold text-lg text-black mb-2">Elétrico</h4>
                <p className="text-gray-600 text-sm">
                  Baterias, velas, bobinas e sistema elétrico
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover-scale">
              <CardContent className="p-6 text-center">
                <Bike className="text-red-600 text-3xl mb-4 mx-auto" />
                <h4 className="font-bold text-lg text-black mb-2">Pneus</h4>
                <p className="text-gray-600 text-sm">
                  Pneus, câmaras e acessórios para rodas
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
                <div className="text-center">
                  <img
                    src="../../assets/estoque02.jpeg"
                    alt="Estoque de peças para motocicletas"
                    className="rounded-xl shadow-lg w-full h-48 sm:h-96 mb-4 object-cover"
                  />
                  <h4 className="font-bold text-base sm:text-lg text-black">
                    Estoque de peças, óleos e filtros
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Mais de 2.000 itens em estoque
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="../../assets/motor.jpg"
                    alt="Peças originais de qualidade"
                    className="rounded-xl shadow-lg w-full h-48 sm:h-96 mb-4 object-cover"
                  />
                  <h4 className="font-bold text-base sm:text-lg text-black">
                    Qualidade Garantida
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Apenas peças originais e certificadas
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-600 text-white p-8 sm:p-12 rounded-xl mb-4">
                    <ShoppingCart className="text-3xl sm:text-4xl mb-4 mx-auto" />
                    <h4 className="font-bold text-base sm:text-lg">
                      Entrega Rápida
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Entrega no mesmo dia para região metropolitana
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Por que escolher a RN Motos?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Com anos de experiência e compromisso com a excelência nos colocam
              como referência no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h4 className="font-bold text-xl mb-3">5 Anos de Experiência</h4>
              <p className="text-gray-300">
                Tradição e conhecimento técnico especializado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-xl mb-3">Equipe Certificada</h4>
              <p className="text-gray-300">
                Mecânicos especializados e constantemente treinados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={24} />
              </div>
              <h4 className="font-bold text-xl mb-3">Equipamentos Modernos</h4>
              <p className="text-gray-300">
                Tecnologia de ponta para diagnósticos precisos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} />
              </div>
              <h4 className="font-bold text-xl mb-3">Garantia Estendida</h4>
              <p className="text-gray-300">
                90 dias de garantia em todos os serviços realizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="font-heading font-bold text-4xl text-black mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa equipe está pronta para atender você. Fale conosco e
                agende já o seu serviço.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Telefone</h4>
                    <p className="text-gray-600">(98) 98349-9234</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">WhatsApp</h4>
                    <p className="text-gray-600">(98) 98123-0034</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">E-mail</h4>
                    <p className="text-gray-600">contato@rnmotos.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Lourenço Vieira da Silva, nº 18
                      <br />
                      Jardim São Cristovão - São Luís/MA
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-black mb-3">
                    Horário de Funcionamento
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>08:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergências:</span>
                      <span className="text-red-600 font-bold">24h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-b from-red-600 to-red-900 text-white">
              <CardContent className="p-8 ">
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Fale Conosco Agora
                </h3>
                <p className="text-xl mb-8">
                  Entre em contato diretamente pelo WhatsApp para atendimento
                  imediato ou ligue para nossa central.
                </p>

                <div className="space-y-4 text-center">
                  <Button
                    className="w-full sm:w-96 bg-white text-red-600 hover:bg-gray-100 py-3 sm:py-4 text-base sm:text-lg font-bold hover-scale"
                    onClick={() => {
                      const message =
                        "Olá! Gostaria de solicitar um atendimento da RN Motos, peças e serviços. Podem me ajudar?";
                      const phoneNumber = "5598981230034";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                  >
                    <Phone className="mr-2" size={20} />
                    Chamar no WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full sm:w-96 border-2 border-white text-red-600 hover:bg-white hover:text-red-600 py-3 sm:py-4 text-base sm:text-lg font-bold hover-scale"
                    onClick={() => window.open("tel:+5598981230034", "_self")}
                  >
                    <Phone className="mr-2" size={20} />
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 sm:py-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Bike className="text-red-600 text-3xl" />
                <span className="font-heading font-bold text-2xl">
                  RN Motos, peças e serviços
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Especialistas em manutenção de motocicletas com mais de 5 anos
                de experiência. Sua confiança é nossa maior conquista.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/r_n_motos?igsh=MWFibGJjMDhpeXdxcg=="
                  target="_blank"
                  className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="WhatsApp"
                  onClick={() => window.open("tel:+5598981230034", "_self")}
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Manutenção Preventiva
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Manutenção Corretiva
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Busca e Entrega
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Venda de Peças
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(98) 98349-9234</li>
                <li>contato@rnmotos.com.br</li>
                <li>Av. Lourenço Vieira da Silva, nº 18</li>
                <li>Jardim São Cristovão - São Luís/MA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-xs sm:text-base">
            <p>
              &copy; {new Date().getFullYear()} RN Motos, Peças e Serviços.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Component */}
      <WhatsAppFloat />
    </div>
  );
}
