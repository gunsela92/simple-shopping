import CalandhaLogo from "../../assets/Calandha-Logo.png";
import ShopierImage from "../../assets/shopier.jpg";
import "./aboutUs.css"

const AboutPage = () => {
  return (
      <div className="aboutUsWrapper">
          <img src={CalandhaLogo} className="aboutUsLogo" />
        <div className="aboutUsText">
          <strong>Calandha Kimdir ?</strong>
          <p>Calandha.com üyelerine özel fiyatlar sunarak, ayrıcalıklı alışveriş deneyimini yaşatan özel bir alışveriş sitesidir.
            Kurulduğu günden itibaren müşteri memnuniyetini ön plana taşıyarak, müşteri istekleri doğrultusunda kendini yenilemeye devam etmektedir.</p>

          <strong>Güvenli Alışveriş</strong>
          <p>Calandha.com veri iletiminde 256 bit şifreleme ile iletilen bilgilerin güvenliğini sağlayan SSL sertifikası kullanmaktadır.
            Calandha.com’da kredi kartı bilgileriniz yalnızca sipariş işlemi gerçekleştirilirken, shopier tarafından kullanılır ve veri tabanında kayıtlı olarak tutulmaz, kesinlikle üçüncü kişiler tarafından görülmez.</p>

          <strong>Kalite ve Orjinallik Garantisi</strong>
          <p>Satılan her ürün calandha.com’un güvencesi altındadır.</p>

          <strong>Kredi kartına taksit yapılıyor mu?</strong>
          <p>Calandha.com üzerinden yapılan alışverişlerde shopier altyapısı kullanılmakta olup taksit seçenekleri için ilgili görseli inceleyebilirsiniz.</p>
        </div>
        <img src={ShopierImage} className="shopierImage"/>
        <div className="aboutUsText">
          <strong>En İyi Müşteri Deneyimi</strong>
          <p>En iyi müşteri deneyimini yaşatmayı hizmet anlayışının merkezine koyan calandha.com üyeleri ile birebir iletişim kurduğu Facebook, Instagram,Whatsapp kanalları aracılığı ile sürekli ulaşılabilir durumdadır.</p>
        </div>
      </div>
  );
};

export default AboutPage;
