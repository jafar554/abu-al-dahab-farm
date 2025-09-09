import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Users, Waves, Utensils, Home, GamepadIcon, TreesIcon, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/962788476051" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 w-15 h-15 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        data-testid="whatsapp-float-button"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
        </svg>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent drop-shadow-2xl" data-testid="hero-title">
            مزرعة أبو الذهب
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg" data-testid="hero-description">
            أجواء ريفية ساحرة – مثالية للعائلات والمجموعات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-book-now"
            >
              احجز الآن
            </Button>
            <Button 
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('tel:+962788476051')}
              data-testid="button-call-us"
            >
              اتصل بنا
            </Button>
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-foreground" data-testid="rating-badge">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9</span>
            <span className="text-sm text-muted-foreground">(23 تقييم)</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="about-title">من نحن</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="مزرعة أبو الذهب - منظر خارجي" 
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-farm-exterior"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary" data-testid="about-welcome-title">مرحباً بكم في مزرعة أبو الذهب</h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description-1">
                تقع مزرعتنا في قلب محافظة الزرقاء في منطقة بلعما - الزيتونة، وتوفر تجربة ريفية لا تُنسى للعائلات والأصدقاء. نحن نفتخر بتقديم أجواء هادئة وطبيعية بعيداً عن صخب المدينة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description-2">
                مزرعتنا مجهزة بكافة المرافق الحديثة مع الحفاظ على الطابع الريفي الأصيل، مما يجعلها المكان المثالي لقضاء أوقات ممتعة مع الأحباب.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-muted p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-rating">4.9</div>
                    <div className="text-sm text-muted-foreground">تقييم العملاء</div>
                  </CardContent>
                </Card>
                <Card className="bg-muted p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-reviews-count">23</div>
                    <div className="text-sm text-muted-foreground">مراجعة</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="amenities-title">المرافق والخدمات</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Swimming Pool */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-pool">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="مسبح المزرعة" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">مسبح كبير ونظيف</h3>
                <p className="text-muted-foreground">مسبح واسع ونظيف مع جلسات مريحة حوله للاستمتاع بأوقات السباحة</p>
              </CardContent>
            </Card>
            
            {/* Outdoor Seating */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-seating">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="جلسات خارجية" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">جلسات خارجية مريحة</h3>
                <p className="text-muted-foreground">جلسات داخلية وخارجية مصممة للاسترخاء والاستمتاع بالأجواء الريفية</p>
              </CardContent>
            </Card>
            
            {/* BBQ Area */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-bbq">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="منطقة الشواء" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">ركن الشواء والمنقل</h3>
                <p className="text-muted-foreground">منطقة مجهزة بالكامل للشواء مع كافة المستلزمات اللازمة</p>
              </CardContent>
            </Card>
            
            {/* Children's Playground */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-playground">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="ملعب الأطفال" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">بيت الأطفال والألعاب</h3>
                <p className="text-muted-foreground">منطقة ألعاب آمنة ومجهزة للأطفال لقضاء أوقات ممتعة</p>
              </CardContent>
            </Card>
            
            {/* Sports Activities */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-sports">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="ألعاب رياضية" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">البلياردو وتنس الطاولة</h3>
                <p className="text-muted-foreground">قاعة ألعاب مجهزة بطاولات البلياردو وتنس الطاولة</p>
              </CardContent>
            </Card>
            
            {/* Garden Area */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow" data-testid="card-amenity-garden">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="منطقة الحديقة" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">حديقة واسعة وساحة</h3>
                <p className="text-muted-foreground">مساحات خضراء واسعة للتنزه والاستمتاع بالطبيعة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="reviews-title">آراء عملائنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background shadow-lg" data-testid="card-review-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"أروع مزرعة، واسعة ونظيفة وجديدة. فيها كل الأنشطة - ملعب، ساحة مجهزة بألعاب الأطفال، تنس طاولة، بلياردو، جلسات داخلية وخارجية، ركن شواء ومسبح كبير ونظيف."</p>
                <div className="font-semibold text-foreground">نور أبو العينين</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-lg" data-testid="card-review-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"والله أحراجونا هؤلاء الرجال حرفياً. جوا جابوا حطب للمنقل، وبهارات، وزيت إلخ وعملولنا المنقل. باختصار ناس مؤدبين ومطعمين."</p>
                <div className="font-semibold text-foreground">إياس عرموش</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-lg" data-testid="card-review-3">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"ماشاء الله اشي فخم ولا أروع الله يبارك لصاحبها"</p>
                <div className="font-semibold text-foreground">عميل راضي</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="contact-title">الحجز والتواصل</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card shadow-lg" data-testid="card-booking-hours">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">ساعات الحجز</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="font-semibold text-foreground">الفترة الصباحية</span>
                      <span className="text-primary font-bold">9 صباحاً - 9 مساءً</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">الفترة الليلية</span>
                      <span className="text-primary font-bold">10 مساءً - 7 صباحاً</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-lg" data-testid="card-contact-info">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">وسائل التواصل</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary rounded-full p-3">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">رقم الهاتف</div>
                        <a 
                          href="tel:+962788476051" 
                          className="text-primary text-lg font-bold hover:underline"
                          data-testid="link-phone"
                        >
                          +962 7 8847 6051
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500 rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">واتساب</div>
                        <a 
                          href="https://wa.me/962788476051" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 font-bold hover:underline"
                          data-testid="link-whatsapp"
                        >
                          احجز عبر الواتساب
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6"
                      onClick={() => window.open('https://wa.me/962788476051', '_blank')}
                      data-testid="button-whatsapp-book"
                    >
                      احجز الآن عبر الواتساب
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Location & Map */}
            <div className="space-y-8">
              <Card className="bg-card shadow-lg" data-testid="card-location">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">موقع المزرعة</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary rounded-full p-3">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">العنوان</div>
                        <p className="text-muted-foreground">الزرقاء - بلعما - منطقة الزيتونة</p>
                        <p className="text-sm text-muted-foreground">بعد الهاشمية بـ 10 كم</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-lg" data-testid="card-map">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">الخريطة التفاعلية</h3>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8!2d36.1560154!3d32.1929645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b77000ee65d5f%3A0xb184968fb4781683!2z2YXYstin2LHYudipINij2KjZiCDYp9mE2LDZh9io!5e0!3m2!1sen!2s!4v1703875200000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      data-testid="iframe-google-maps"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-accent mb-4" data-testid="footer-title">مزرعة أبو الذهب</h3>
            <p className="text-muted-foreground mb-6" data-testid="footer-subtitle">أجواء ريفية ساحرة في قلب الأردن</p>
            
            <div className="flex justify-center gap-6 mb-6">
              <a 
                href="tel:+962788476051" 
                className="hover:text-accent transition-colors"
                data-testid="footer-link-phone"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/962788476051" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                data-testid="footer-link-whatsapp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                </svg>
              </a>
              <a 
                href="https://maps.app.goo.gl/ciZcwatziuffUoaj9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                data-testid="footer-link-maps"
              >
                <MapPin className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
                جميع الحقوق محفوظة © مزرعة أبو الذهب 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
