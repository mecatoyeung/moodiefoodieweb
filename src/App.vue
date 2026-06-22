<template>
  <div id="wrapper" class="container">
    <div class="container">
      <div class="row">
        <div id="header" class="d-flex justify-content-center w-100">
          <div class="d-flex flex-column align-items-center w-100">
            <a :href="baseURL">
              <img
                :src="assetUrl('assets/img/moodiefoodie-1.png')"
                width="120"
                height="120"
                style="margin: 10px auto"
              />
            </a>
            <h2 class="page-title">Moodie.Foodie</h2>
            <div id="menu-container">
              <div id="menu">
                <button>
                  <font-awesome-icon :icon="['fa', 'utensils']" />
                  &nbsp;飲食推介
                </button>
                |
                <button>
                  <font-awesome-icon :icon="['fas', 'cocktail']" />
                  &nbsp;飲品工作坊
                </button>
                |
                <button>
                  <font-awesome-icon :icon="['fa', 'user-friends']" />
                  &nbsp;同行社群
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr
      style="
        border-top: 4px solid #fa7f32;
        border-bottom: none;
        border-left: none;
        border-right: none;
        width: 100px;
        margin: 30px auto;
        opacity: 1;
      "
    />

    <div id="recent-activities" class="d-flex justify-content-center w-100">
      <div class="d-flex flex-column align-items-center w-100">
        <h1 data-delay="none" data-speed="400">
          <mark class="highlight">RECENT</mark> ACTIVITIES
        </h1>
        <Carousel
          class="mf-carousel"
          :carouselConfig="carouselConfig"
          :items="carouselImages"
        >
          <Slide v-for="slide in carouselImages" :key="slide">
            <img :src="slide.src" :alt="slide.alt" />
            <div
              class="overlay"
              style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
              "
              ref="carouselOverlayRefs"
            >
              <img
                decoding="async"
                :src="assetUrl('assets/img/Fruitful.png')"
                style="
                  width: 100%;
                  height: 100%;
                  margin: auto;
                  position: absolute;
                  display: block;
                  left: 0%;
                  top: 0%;
                "
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div id="connect-for-more" class="d-flex justify-content-center">
          <div class="d-flex flex-column align-items-center">
            <h1 data-delay="none" data-speed="400">
              <mark class="highlight">CONNECT</mark> FOR MORE
            </h1>
            <div class="connect-buttons">
              <a href="#" @click="onContactClicked()">
                <button data-filter="*">
                  <font-awesome-icon :icon="['fa', 'contact-card']" />&nbsp;Add
                  to Contacts
                </button>
              </a>
              <a href="#qrCode" @click="showQRCode = true">
                <button data-filter="*">
                  <font-awesome-icon :icon="['fa', 'qrcode']" />&nbsp;QR Code
                </button>
              </a>
              <div class="modal-overlay" v-if="showQRCode">
                <div class="modal-content">
                  <button class="close-btn" @click="showQRCode = false">
                    <span class="cross">&times;</span>
                  </button>
                  <img
                    decoding="async"
                    loading="lazy"
                    width="256"
                    height="256"
                    :src="assetUrl('assets/img/moodiefoodie-qr-code.png')"
                    @click="downloadVCard()"
                  />
                </div>
              </div>
              <Teleport to="body">
                <div class="modal-overlay" v-if="showQRCode">
                  <div class="modal-content">
                    <button class="close-btn" @click="showQRCode = false">
                      &times;
                    </button>
                    <img
                      decoding="async"
                      loading="lazy"
                      width="256"
                      height="256"
                      :src="assetUrl('assets/img/moodiefoodie-qr-code.png')"
                      @click="downloadVCard()"
                    />
                  </div>
                </div>
              </Teleport>
              <a
                href="https://wa.me/85262568894?text=你好，很高興認識Moodie.Foodie！我希望日後能收到更多關於精神健康及飲食健康的資訊。請新增我為你的聯絡人！https://mecatoyeung.github.io/moodiefoodieweb/"
              >
                <button data-filter=".portfolio_entries-dessert">
                  <font-awesome-icon
                    :icon="['fab', 'whatsapp']"
                  />&nbsp;Whatsapp
                </button>
              </a>
              <a href="http://www.instagram.com/moodie.foodie.hk">
                <button data-filter=".portfolio_entries-fish">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                  />&nbsp;Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="who-we-are" class="d-flex justify-content-center">
      <div class="d-flex flex-column align-items-center">
        <h1><mark class="highlight">WHO</mark> WE ARE</h1>
        <img
          decoding="async"
          loading="lazy"
          width="88"
          height="84"
          :src="assetUrl('assets/img/coffee_logo.webp')"
          style="margin: 20px 0 40px 0"
        />
        <h2 style="font-family: Prata; text-transform: uppercase">
          “Brings You Mouthful of Mental Health!”
        </h2>
        <div
          style="margin-top: 20px; color: #666"
          data-delay="none"
          data-speed="400"
        >
          <p>Join Us and Enjoy to be a “Moodie.Foodie”!</p>
        </div>
        <p
          style="max-width: 640px; color: #666; line-height: 2em; margin: auto"
        >
          Moodie.Foodie is a group of passionate Person-In-Recovery,
          Nutritionist, Pharmacy Dispenser and Volunteers with flexible mindsets
          in promoting diet-mental health relationship (DMHR) and Dietary
          Interventions to Mental Issues in ways of “Foodie”.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "intersection-observer";
import { useHead } from "@vueuse/head";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import "vue3-carousel/carousel.css";

const baseURL = import.meta.env.BASE_URL;

const assetUrl = (path) => `${baseURL}${path.replace(/^\//, "")}`;

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

const carouselImages = ref([
  {
    src: assetUrl("assets/img/banner-1.jpeg"),
    alt: "工作坊",
    isInView: false,
  },
  { src: assetUrl("assets/img/banner-2.jpeg"), alt: "展覽", isInView: false },
  {
    src: assetUrl("assets/img/banner-3.jpeg"),
    alt: "小組討論",
    isInView: false,
  },
]);

const carouselOverlayRefs = ref([]);

const showQRCode = ref(false);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = entry.target.dataset.index;
      entry.target.classList.add("img-in-view");
      observer.unobserve(entry.target);
    }
  });
};

let observer = null;

if (typeof window !== "undefined") {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
}

onMounted(() => {
  if (observer) {
    carouselOverlayRefs.value.forEach((carouselOverlayRef) => {
      observer.observe(carouselOverlayRef);
    });
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

useHead({
  title: "Moodie Foodie",
  meta: [
    {
      name: "description",
      content:
        "RECENT ACTIVITIES CONNECT FOR MORE Add to Contacts QR Code Whatsapp Instagram WHO WE ARE “Brings You Mouthful of Mental Health!” Love Eating, Sharing and Gathering together? Join Us and Enjoy to be a “Moodie.Foodie”! Moodie.Foodie is a group of passionate Person-In-Recovery, Nutritionist, Pharmacy Dispenser and Volunteers with flexible mindsets in promoting diet-mental health relationship",
    },
    { name: "robots", content: "max-image-preview:large" },
    { name: "generator", content: "All in One SEO (AIOSEO) 4.4.2" },
    { property: "og:locale", content: "zh_HK" },
    { property: "og:site_name", content: "Moodie.Foodie - vCard" },
    { property: "og:type", content: "article" },
    { property: "og:title", content: "Moodie.Foodie" },
    {
      property: "og:description",
      content:
        "RECENT ACTIVITIES CONNECT FOR MORE Add to Contacts QR Code Whatsapp Instagram WHO WE ARE “Brings You Mouthful of Mental Health!” Love Eating, Sharing and Gathering together? Join Us and Enjoy to be a “Moodie.Foodie”! Moodie.Foodie is a group of passionate Person-In-Recovery, Nutritionist, Pharmacy Dispenser and Volunteers with flexible mindsets in promoting diet-mental health relationship",
    },
    {
      property: "og:image",
      content: assetUrl("assets/img/moodiefoodie-1.png"),
    },
    {
      property: "og:url",
      content: "https://mecatoyeung.github.io/moodiefoodieweb/",
    },
    {
      property: "article:published_time",
      content: "2025-01-26T00:00:00+00:00",
    },
    { property: "article:modified_time", content: "2025-01-26T00:00:00+00:00" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Moodie.Foodie" },
    {
      name: "twitter:description",
      content:
        "RECENT ACTIVITIES CONNECT FOR MORE Add to Contacts QR Code Whatsapp Instagram WHO WE ARE “Brings You Mouthful of Mental Health!” Love Eating, Sharing and Gathering together? Join Us and Enjoy to be a “Moodie.Foodie”! Moodie.Foodie is a group of passionate Person-In-Recovery, Nutritionist, Pharmacy Dispenser and Volunteers with flexible mindsets in promoting diet-mental health relationship",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://mecatoyeung.github.io/moodiefoodieweb/",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: true },
    {
      rel: "href",
      href: "https://fonts.googleapis.com/css2?family=Prata&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap",
    },
    { rel: "icon", href: assetUrl("favicon.ico"), type: "image/x-icon" },
  ],
});

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
const onContactClicked = () => {
  if (iOS()) {
    document.location.href = assetUrl("assets/stepwong.vcf");
  } else {
    downloadVCard();
  }
};
const downloadVCard = () => {
  var data =
    "BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3AWong%3BStephanie%3B%0AFN%3AStephanie%0AORG%3AFoodie%20Moodie%0ATITLE%3AFounder%0APHOTO%3BMEDIATYPE%23image%2Fpng%3Ahttp%3A%2F%2Fmoodiefoodie.codingpanda.me%2Fwp-content%2Fuploads%2F2023%2F07%2Fmoodiefoodie-1.png%0ATEL%3BTYPE%3DWORK%2CVOICE%3A%28%2B852%29%2062568894%0AADR%3BTYPE%3DWORK%3A%3B%3BHong%20Kong%0AEMAIL%3Astepwong%40moodiefoodie.com%0AEND%3AVCARD";
  window.open("data:text/x-vcard;urlencoded," + data);
};
</script>

<style>
body {
  background-color: #fdf6ee;
}
#app {
  width: 100%;
  max-width: 1280px;
  padding: 0 !important;
}
</style>

<style scoped>
＃wrapper {
  width: 100%;
  max-width: 1280px;
}

h1 {
  font-family: BenchNine;
  font-size: 3em;
  font-weight: 800;
  line-height: 60px;
  letter-spacing: 5px;
  text-transform: none;
  color: #23292c;
  text-align: center;
}

h2.page-title {
  font-family: Prata;
  margin-top: 0;
  margin-bottom: 20px;
}

#menu {
  border: 1px solid #e3e3e3;
  padding: 0;
  font-size: 0.8em;
}

#menu button {
  background: none;
  border: none;
  padding: 4px;
  color: #666666;
}

.highlight {
  background: none;
  color: #e68556;
}

#recent-activities {
  margin-top: 20px;
}

.mf-carousel {
  width: 90%;
  max-width: 1000px;
  border: 1px solid #000;
  position: relative;
}

.mf-carousel img {
  width: 100%;
  max-width: 1000px;
}

.fadeup {
  transform: translateY(50px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

#connect-for-more {
  margin: 20px 0;
}

/* Define the keyframes for the fade-in animation */
@keyframes fadeInView {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mf-carousel .overlay {
  opacity: 0;
  transition:
    opacity 1s ease-in-out,
    transform 1s ease-in-out;
}

.mf-carousel .overlay.img-in-view {
  animation: fadeInView 1s forwards;
}

.connect-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e3e3e3;
  align-items: center;
  padding: 5px;
  font-family: Prata;
}

.connect-buttons button {
  background: none;
  border: none;
  color: #666666;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 0.8em;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  width: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px;
  height: 40px;
  border: 3px solid #fff;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cross {
  line-height: 1em;
}

#who-we-are {
  margin: 20px 0;
  padding-bottom: 200px;
}
</style>
