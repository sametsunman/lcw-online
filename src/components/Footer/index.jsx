import React from 'react';
import { Wrapper, ButtonBar, LinkBar } from './index.styles';


const Footer = () => {
  return <Wrapper>
    <ButtonBar>
      <div>
        <span>
          Uygulamayı indirin
        </span>
        <img src='/assets/buttons/app_store.png' alt='app_store' />
        <img src='/assets/buttons/google_play.png' alt='google_play' />
        <img src='/assets/buttons/app_gallery.png' alt='app_gallery' />
      </div>
      <div>
        <span>
          Bizi takip edin
        </span>
        <img src='/assets/buttons/facebook.svg' alt='facebook' />
        <img src='/assets/buttons/linkedin.svg' alt='linkedin' />
        <img src='/assets/buttons/instagram.svg' alt='instagram' />
        <img src='/assets/buttons/youtube.svg' alt='youtube' />
      </div>

    </ButtonBar>
    <LinkBar>
      <ul>
        <li>Yardım</li>
        <li>Sıkça sorulan sorular</li>
        <li>İade ve değişim</li>
        <li>Site haritası</li>
        <li>Kullanım koşulları</li>
        <li>İşlem rehberi</li>
      </ul>
      <ul>
        <li>Kurumlar</li>
        <li>Hakkımızda</li>
        <li>Mağazalarımız</li>
        <li>Kurumsal/Corporate</li>
        <li>Kariyer fırsatları</li>
        <li>Kurumsal destek</li>
      </ul>
      <ul>
        <li>Politikalar</li>
        <li>Aydınlatma metni</li>
        <li>Veri gizliliği ve güvenliği politikası</li>
      </ul>
      <ul>
        <li>Lc Waikiki Destek</li>
        <li className='button'><img src='/assets/icons/document.svg' alt='contact' />İletişim Formu</li>
        <li className='button'><img src='/assets/icons/phone.svg' alt='phone' />444 4 529</li>
        <li className='button'><img src='/assets/icons/whatsapp.svg' alt='whatsapp' />Whatsapp destek 444 4 529</li>
      </ul>
    </LinkBar>
  </Wrapper>;
};

export default Footer;