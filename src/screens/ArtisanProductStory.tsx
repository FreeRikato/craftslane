import React from 'react';

const ArtisanProductStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  TopNavBar (Shared Component JSON)  */ }
<nav className="bg-surface/80 dark:bg-primary/80 backdrop-blur-md text-primary dark:text-primary-fixed font-label-lg text-label-lg shadow-sm flex justify-between items-center w-full px-md py-sm max-w-container-max mx-auto docked full-width top-0 sticky z-50">
<div className="flex items-center gap-md">
<span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">Craftline</span>
<div className="hidden md:flex gap-sm">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs transition-all duration-300 ease-in-out active:scale-95" href="#">Discover</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs transition-all duration-300 ease-in-out active:scale-95" href="#">Stories</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs transition-all duration-300 ease-in-out active:scale-95" href="#">Impact</a>
<a className="text-primary dark:text-secondary-fixed font-bold border-b-2 border-primary dark:border-secondary-fixed pb-1 px-sm py-xs hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95" href="#">Shop</a>
</div>
</div>
<div className="flex items-center gap-sm">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-xl pr-sm py-xs bg-surface-container-low/60 dark:bg-primary-container/40 border border-outline-variant rounded-full text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-48 focus:w-64" placeholder="Search..." type="text"/>
</div>
<button className="material-symbols-outlined text-primary hover:bg-primary-fixed/10 rounded-full p-xs transition-colors">favorite</button>
<button className="material-symbols-outlined text-primary hover:bg-primary-fixed/10 rounded-full p-xs transition-colors">shopping_bag</button>
<button className="md:hidden material-symbols-outlined text-primary hover:bg-primary-fixed/10 rounded-full p-xs transition-colors">menu</button>
</div>
</nav>
<main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter py-lg flex flex-col md:flex-row gap-lg">
{ /*  Product Imagery (Left Column)  */ }
<section className="w-full md:w-1/2 flex flex-col gap-sm">
<div className="flex flex-col mb-md">
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-xs">You discovered</span>
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg font-bold text-primary mb-2">Okhai</h1>
<h2 className="text-headline-md font-headline-md text-on-surface">"Thousand Mirrors" Hand-Embroidered Off White Pure Cotton Bomber Jacket</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-sm">
{ /*  Hero Image  */ }
<div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm bg-surface-container-highest">
<img alt="Product Hero Image" className="w-full h-full object-cover object-center" data-alt="A striking portrait of a female model wearing an off-white, intricately hand-embroidered bomber jacket. The jacket is adorned with small, reflective mirror details. The setting features a warm, rich terracotta or deep red background, creating a strong contrast with the bright garment. The lighting is dramatic and directional, emphasizing the texture of the cotton fabric and the sparkle of the embroidery. The overall mood is artisanal, elegant, and culturally rich, embodying a slow-fashion aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgjO6-y1GfWzt5I82ouDeqJCDjkw9xiurNZwxSs3mvyOcC8L_i0_x1aiP5xuP_UPniT9txCDmrzGSF6yDrFu4hpYjOk0u8Rii1GU8dQSzV87K3dphpNpRol7Pw5_OMSOtBsZ3TDjo1meuGyvkvQvXQ2jjlw6vJqCVoJ-N8srrvQRHMSN7II5nYCbaSWoqsvC_ZDA91obl9oq6MtPWydslChLGZUJ0NznaPU6kcxKa3XB6Qbg_6mAKIcfJZ8AhLLN7ciV3fettZywc"/>
</div>
{ /*  Detail Image 1  */ }
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-highest aspect-square">
<img alt="Detail Image 1" className="w-full h-full object-cover object-center" data-alt="A close-up shot focusing on the back detail of the off-white hand-embroidered bomber jacket worn by a model. The intricate stem stitch and satin stitch embroidery patterns are clearly visible, along with the meticulously placed almond-shaped and round mirrors. The model's dark hair contrasts with the light fabric. The background remains a deep, rich red, maintaining the warm, high-contrast, artisanal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-6VY8AwVFQtsiIpdAwlQZYu06WzymHSP1JVofC4_5Pa9rvK8aJZbThxC7U9Hk3RIyumm16dxnmSdd5DbapMGo9qENkHEIDXXBX3dPwp1bjt8GAd4zpOLEZnvIdLHjqTjfrrB4LSZbOnCuPoGhKX6sR39MyDRIr7lWOiuMZLMQv_SRS-LT-zlot_JDeYL1_Q9kvsGwxpXXtpkFafYDtKJnMdsnK_a2g0tEXfo5VYOHzMtdqh64an7J_BHtyDDSeSF6lvAxmd1hKZE"/>
</div>
{ /*  Detail Image 2  */ }
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-highest aspect-square">
<img alt="Detail Image 2" className="w-full h-full object-cover object-center" data-alt="A full-body side-profile shot of the model wearing the off-white embroidered bomber jacket paired with loose-fitting, light beige trousers. The model is standing in a relaxed pose against the textured, deep red background. The lighting highlights the drape of the pure cotton fabric and the structural double-layered design of the jacket. The mood is sophisticated and emphasizes the garment's fit and comfort within an artisanal context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYahHJoaVeNnlR6cOLAQTmCidaP3N_ArzHz1Eh0IcDYXDColGT1WGiv6gg3xbv-6Wwz-dyxG946fSpZ_HzoXhYfRV-v911p56h0SqwaOMLiBQW667IS6yIUPO5_QqCgfb5Jno98LhCbWP-MZ-CymscnYQEcUlMge5_qY3FkZZpLhpGfkkBxPDhbK-vSPO1T1BWYyWrqt2PvKXrjV9STbYQcuV9vdYMOkO_RPV60CfsHcHXwtLeG5AnBusb-XtdA1UbRZ5875yXpuM"/>
</div>
</div>
</section>
{ /*  Product Details & Navigation (Right Column)  */ }
<section className="w-full md:w-1/2 flex flex-col pt-md md:pt-0">
{ /*  Detail Tabs  */ }
<div className="flex border-b border-outline-variant mb-lg overflow-x-auto no-scrollbar">
<button className="px-md py-sm text-label-lg font-label-lg text-primary border-b-2 border-primary font-bold whitespace-nowrap">About</button>
<button className="px-md py-sm text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Journey (DPP)</button>
<button className="px-md py-sm text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Care guide</button>
<button className="px-md py-sm text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">FAQ</button>
</div>
{ /*  Tab Content: About  */ }
<div className="flex flex-col gap-lg">
{ /*  Artisan Info  */ }
<div className="flex items-center justify-between p-sm rounded-xl bg-surface-container-low shadow-[0_4px_12px_rgba(13,61,49,0.04)]">
<div className="flex items-center gap-md">
<img alt="Artisan Manorath Dhillon" className="w-16 h-16 rounded-full object-cover border-2 border-primary-fixed" data-alt="A warm, candid portrait of an Indian artisan named Manorath Dhillon. She is wearing a bright yellow top and smiling gently, conveying pride in her craft. The background is a soft, slightly blurred workshop environment with natural light illuminating her face. The image feels human-centric, authentic, and grounded, representing the maker behind the garment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3vwdflbItQC6l6kkqhQ3dOgubqBMtsS0QRx9-lL0eVU2SHKDYfLSCe5kps51l7DvgLh-TLqn1dMmuaknixyiw40CAGD_6AFrellLeKuoBB8JKWezHmhRdP9nqjERApQrM3rC1p8zpjGYblNvaTXGTpRpI4cEFgjbT0vJC2xXl9UiAL06Jb2OD9Cvz4GLm_8RvzXzuWoqPu3A0qnd7zJ3tEC7uzdg3WEbgvjZjuaEAGKIZt95-3k-Y-8bNsjZLsDTd6YYGIJ2tbRc"/>
<div className="flex flex-col">
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Artisan:</span>
<span className="text-headline-md font-headline-md text-primary underline decoration-secondary-fixed decoration-2 underline-offset-4 cursor-pointer">Manorath Dhillon</span>
</div>
</div>
<div className="text-right">
<span className="text-body-md font-body-md text-on-surface-variant">Based in: India</span>
</div>
</div>
{ /*  Product Life Story  */ }
<div>
<h3 className="text-headline-md font-headline-md text-primary mb-sm">Product life story</h3>
<p className="text-body-md font-body-md text-on-surface leading-relaxed">
                        Crafted in double-layered fabric for structure and comfort, the piece is its intricate hand embroidery in satin and stem stitch, embellished with round, diagonal, and almond-shaped mirrors interspersed with delicate white beads.
                    </p>
</div>
{ /*  Price & Actions  */ }
<div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant">
<div className="flex items-center gap-sm">
<button className="p-sm rounded-full bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">chat_bubble_outline</span>
</button>
<button className="p-sm rounded-full bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">favorite_border</span>
</button>
</div>
<button className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed text-headline-md font-headline-md font-bold py-sm px-xl rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
                        Adopt now! 50£
                    </button>
</div>
{ /*  Transparency Details  */ }
<div className="bg-surface-container-low rounded-xl p-md shadow-[0_4px_12px_rgba(13,61,49,0.04)] mt-md">
<h4 className="text-label-lg font-label-lg text-primary mb-sm">Where your money goes</h4>
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between text-body-md font-body-md text-on-surface">
<span className="w-1/3">Artisans earnings</span>
<div className="flex-grow mx-md h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="bg-secondary-container h-full w-[75%] rounded-full"></div>
</div>
<span className="w-12 text-right">75%</span>
</div>
<div className="flex items-center justify-between text-body-md font-body-md text-on-surface">
<span className="w-1/3">Platform &amp; logistics</span>
<div className="flex-grow mx-md h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="bg-on-surface-variant h-full w-[25%] rounded-full"></div>
</div>
<span className="w-12 text-right">25%</span>
</div>
</div>
</div>
</div>
{ /*  Hidden Journey Tab Content (for reference/structure if needed, visually hidden)  */ }
<div className="hidden flex-col gap-lg">
<div className="relative pl-md border-l-2 border-dashed border-outline-variant ml-md space-y-xl">
{ /*  Step 1  */ }
<div className="relative">
<div className="absolute -left-[35px] top-0 bg-secondary-container text-on-secondary-container p-xs rounded-full shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">palette</span>
</div>
<div className="flex items-center justify-between">
<span className="text-label-lg font-label-lg text-primary">Dyeing:</span>
<span className="text-body-md font-body-md text-on-surface-variant">City, country</span>
</div>
</div>
{ /*  Step 2  */ }
<div className="relative">
<div className="absolute -left-[35px] top-0 bg-surface-container text-on-surface p-xs rounded-full shadow-sm border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">extension</span>
</div>
<div className="flex items-center justify-between">
<span className="text-label-lg font-label-lg text-primary">Finishing:</span>
<span className="text-body-md font-body-md text-on-surface-variant">City, country</span>
</div>
</div>
{ /*  Step 3  */ }
<div className="relative">
<div className="absolute -left-[35px] top-0 bg-surface-container text-on-surface p-xs rounded-full shadow-sm border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">water_drop</span>
</div>
<div className="flex items-center justify-between">
<span className="text-label-lg font-label-lg text-primary">Tanning:</span>
<span className="text-body-md font-body-md text-on-surface-variant">City, country</span>
</div>
</div>
{ /*  Step 4  */ }
<div className="relative">
<div className="absolute -left-[35px] top-0 bg-secondary-container text-on-secondary-container p-xs rounded-full shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">factory</span>
</div>
<div className="flex items-center justify-between">
<span className="text-label-lg font-label-lg text-primary">Manufacturing:</span>
<span className="text-body-md font-body-md text-on-surface-variant">City, country</span>
</div>
</div>
</div>
</div>
</section>
</main>
{ /*  Footer (Shared Component JSON)  */ }
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container text-label-md font-label-md w-full py-lg mt-xl max-w-container-max mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="flex flex-col gap-sm">
<span className="text-headline-lg font-headline-lg text-primary-fixed font-bold tracking-tight mb-md">Craftline</span>
<p className="text-body-md font-body-md text-on-primary/80">© 2025 Craftline. Bridging the gap between maker and seeker.</p>
</div>
<div className="flex flex-col gap-sm">
<a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Provenance</a>
<a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Materials</a>
<a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Care Guide</a>
</div>
<div className="flex flex-col gap-sm">
<a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Artisan Login</a>
<a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Contact</a>
</div>
</footer>
    </div>
  );
};

export default ArtisanProductStory;
