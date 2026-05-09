import React from 'react';

const DiscoveryHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  TopNavBar  */ }
<nav className="bg-surface/80 dark:bg-primary/80 backdrop-blur-md docked full-width top-0 sticky z-50 bg-surface-container-low/60 dark:bg-primary-container/40 shadow-sm">
<div className="flex justify-between items-center w-full px-md py-sm max-w-container-max mx-auto">
<div className="flex items-center gap-md">
<a className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim" href="#">Craftline</a>
<div className="hidden md:flex items-center bg-surface-container rounded-full px-sm py-xs border border-outline-variant focus-within:border-primary focus-within:border-2 transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-48 placeholder-on-surface-variant/70" placeholder="Search artisans, crafts..." type="text"/>
</div>
</div>
<div className="hidden md:flex gap-md items-center">
<a className="text-primary dark:text-secondary-fixed font-bold border-b-2 border-primary dark:border-secondary-fixed pb-1 hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 px-xs" href="#">Discover</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 px-xs pb-1" href="#">Stories</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 px-xs pb-1" href="#">Impact</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 px-xs pb-1" href="#">Shop</a>
</div>
<div className="flex items-center gap-sm">
<button className="bg-primary text-on-primary font-label-lg px-md py-sm rounded-lg hover:bg-primary-container transition-colors hidden md:block">Adopt now!</button>
<div className="flex gap-xs text-primary dark:text-primary-fixed">
<button className="p-xs hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95"><span className="material-symbols-outlined">favorite</span></button>
<button className="p-xs hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95"><span className="material-symbols-outlined">shopping_bag</span></button>
<button className="p-xs hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 md:hidden"><span className="material-symbols-outlined">menu</span></button>
</div>
</div>
</div>
</nav>
{ /*  Main Content Canvas  */ }
<main className="max-w-container-max mx-auto px-margin-mobile md:px-md pt-lg pb-xl">
{ /*  Header Section  */ }
<header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary max-w-sm">Let's Browse the world!</h1>
<div className="flex items-center gap-sm self-end md:self-auto">
<span className="text-label-lg font-label-lg text-on-surface-variant">SHOP</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-secondary-fixed"></div>
</label>
</div>
</header>
{ /*  Interactive Globe Visualization (Bento Grid Style)  */ }
<section className="relative bg-surface-container-low rounded-xl p-md mb-xl flex justify-center items-center overflow-hidden min-h-[500px] border border-outline-variant/30 shadow-[0_4px_24px_rgba(13,61,49,0.04)]">
{ /*  Simulated Globe Background Elements  */ }
<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<svg className="text-primary" fill="none" height="400" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100" width="400">
<circle cx="50" cy="50" r="48"></circle>
<ellipse cx="50" cy="50" rx="48" ry="20"></ellipse>
<ellipse cx="50" cy="50" rx="20" ry="48"></ellipse>
<line x1="2" x2="98" y1="50" y2="50"></line>
<line x1="50" x2="50" y1="2" y2="98"></line>
</svg>
</div>
{ /*  Artisan Nodes on Globe  */ }
<div className="relative w-full max-w-3xl aspect-[4/3] flex items-center justify-center">
{ /*  Node 1  */ }
<div className="absolute top-[10%] left-[20%] group cursor-pointer transform hover:scale-105 transition-transform z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border-4 border-surface shadow-sm relative">
<img alt="Artisan weaving bright textiles in a rustic setting, focused on the loom, warm natural light highlighting the vibrant threads." className="w-full h-full object-cover" data-alt="A skilled artisan diligently weaving intricate patterns on a traditional wooden loom. Bright, warm natural sunlight streams into the rustic workshop, illuminating the vibrant hues of the hand-dyed yarns. The scene captures the authentic, raw process of textile creation, embodying a grounded, warm modern aesthetic. The atmosphere is quiet, focused, and deeply connected to cultural heritage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3KuvkmN8zhtggDNKwUr697uWfeMHUOnL9gaxvxV8ScWJFEjv-9R_JZoz5YYQYcqNJbbhoEv-wdVVuBGZHwXlbs1FWItIZ3qol3tCXZMJfjzqflwJ2EHHJuI4dDUB1opKr1vL_0_XKEwzhg9FWlAcuy_GMhLxnGmEIXbLTN5ip1ehUYeajvDjbnUZ3AEwOTdziZd9HmKc5oGc9_-j-4NFuHUdx3cJpI9HqNPU7TRhtBZ50ea9F-sqMSAkqjU4ZJUtEKt3nOOYU8ZM"/>
</div>
<div className="absolute -top-2 -right-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-2 py-1 rounded-full shadow-sm">+95</div>
<div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-surface text-on-surface text-label-md px-2 py-1 rounded shadow-md whitespace-nowrap transition-opacity pointer-events-none">India</div>
</div>
{ /*  Node 2 (Center Focus)  */ }
<div className="absolute top-[30%] left-[45%] group cursor-pointer transform hover:scale-110 transition-transform z-20">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-md relative">
<img alt="Woman embroidering white fabric by window light, close up on hands and intricate stitching." className="w-full h-full object-cover" data-alt="A portrait of a skilled craftswoman delicately embroidering intricate white patterns onto a piece of pristine linen. She is seated by a large window, where soft, diffused daylight washes over her workspace, highlighting the texture of the fabric and the precision of her stitches. The mood is serene and intentional, perfectly reflecting a slow-craft, warm modern brand identity. The color palette emphasizes natural whites, soft greens, and warm skin tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJw6lI2NprVXF2mWdW-9cv2pykb-avSodg6Fx_TBNZTFVcWcigq9wv1MiSPwB3U0iyQedV7KZlP-X4AYS9f209nQiiC2nT6NyQHOajrX5vwvrHLu2Us0Xo25mcXxd79Bl2mpNX5CmCLpHxhmgJP6Wyju5qjy1nduiFhfcm_uEBiauypQlsRaEEC2AW6UlmMyzHvfzYbXOs7vq5oggOmoHMwtU5AMlZl1nCy30YMbIe2K8cOpqhn5KR5MBl-KjdK_54hFH-sYMhwBk"/>
</div>
<div className="absolute -top-3 -right-3 bg-secondary-fixed text-on-secondary-fixed text-sm font-bold px-3 py-1 rounded-full shadow-sm">+1202</div>
<div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-surface text-on-surface text-label-md px-2 py-1 rounded shadow-md whitespace-nowrap transition-opacity pointer-events-none z-30">Okhai Collective</div>
</div>
{ /*  Node 3  */ }
<div className="absolute top-[50%] left-[15%] group cursor-pointer transform hover:scale-105 transition-transform z-10">
<div className="w-20 h-20 rounded-full overflow-hidden border-4 border-surface shadow-sm relative">
<img alt="Hands shaping clay on a pottery wheel, earthy tones, motion blur on the wheel." className="w-full h-full object-cover" data-alt="A close-up view of weathered, skilled hands shaping wet, terracotta-colored clay on a rapidly spinning pottery wheel. The earthy, raw tones of the mud contrast beautifully with the subtle, warm modern aesthetic of the surrounding workshop. Natural light catches the damp surface of the emerging vessel, emphasizing the tactile, grounded nature of traditional ceramic craft. The image conveys a profound connection between maker and material." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYAc4DTk37BUvKtwIxNxgxhJgpg-WadsAdATvjDufSHG61hYy2O6gwankdFCeVpH14qhWaR4YxHNK1nEzlR1vR84QmtmNo9W6Sfi62aYP2R6dhfsVuJ0y2jaO0uNhJoDknC77sBEi4l5h-IGC2-71rRmCHoDJU8Iy9wckTceUFIGFFmjJM6jiH_POBt3A4uok0webRU_OBPZp3XdXGippQSmXEhfAFNDmGWKViJk4y8Ietn6NcPfoV9AGyE9j46A-pkWlkig0zH-c"/>
</div>
<div className="absolute -bottom-2 -left-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-2 py-1 rounded-full shadow-sm">+300</div>
<div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-surface text-on-surface text-label-md px-2 py-1 rounded shadow-md whitespace-nowrap transition-opacity pointer-events-none">Morocco</div>
</div>
{ /*  Node 4  */ }
<div className="absolute top-[20%] right-[25%] group cursor-pointer transform hover:scale-105 transition-transform z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border-4 border-surface shadow-sm relative">
<img alt="Portrait of an artisan woman looking directly at camera, soft background." className="w-full h-full object-cover" data-alt="A compelling environmental portrait of a female artisan taking a brief pause from her work. She looks directly at the camera with a calm, confident expression, situated in her softly lit, authentic workshop. The visual style is warm and modern, avoiding harsh lighting or over-editing, allowing her natural dignity and the organic textures of her surroundings to take center stage. The color palette features earthy greens and warm neutrals." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjvZ-WI_ckPghVwq07GMs_MMElIMKR_X0_GSlh0CXW4r7K7lkBsGWIXV4G5xoMVOvQZ0Zsvg6zpkOeE75rm8psSmluYHoWH5gZKpjQlUp83Enw2ucdVKjmgs13gBv5iaVlv7zXkKpqIQ73RmTv1SZhUrNFqVdicX6MFIUuUhK8nopk4CpqNlNjYlp9Vq3bT2jBCQyad6qBSf1yAuO2gTMZzTzgJ5vauY0BYg2gq2m62ZE3JensNTn1ysf11SAJu6gYjO07h_ITpOs"/>
</div>
<div className="absolute -top-2 -right-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-2 py-1 rounded-full shadow-sm">+99</div>
</div>
{ /*  Node 5  */ }
<div className="absolute bottom-[20%] right-[30%] group cursor-pointer transform hover:scale-105 transition-transform z-10">
<div className="w-20 h-20 rounded-full overflow-hidden border-4 border-surface shadow-sm relative">
<img alt="Dyeing fabric in large vats, vibrant colors contrasting with industrial setting." className="w-full h-full object-cover" data-alt="An expansive view of an artisan carefully dipping lengths of natural fabric into large, steaming vats of indigo dye. The deep, rich blues of the dye contrast strikingly against the muted, warm tones of the rustic dyeing facility. The scene is lit by atmospheric sunlight filtering through a slatted roof, capturing the steam and the physicality of the slow-fashion process. The overall aesthetic is raw, grounded, and deeply human." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5EHQihZtp51JBiDq59ncd5m5oKYOC48-Y1wmjX2UXLyIiU3YlvmEPKRXFd-s7pu-P-5L-v1_gIPXYydeql3D0RMIzWisoD_VvbbbBCEt80GVXwYwVLarhcpggyUt5RiwndWYSbjbXXX2S65hCI6tFyNfHb-k3l-zqn8_hIU3bPzc7fGAmGL26kDXDS5pV-_2RIXWxScF1EesWS7hLqtfyg1x9OL3CcMw1gpECVgQapp36e5WA3Yr7IJY0Gfar88NlpaGMcEylKg"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-2 py-1 rounded-full shadow-sm">+201</div>
</div>
</div>
{ /*  Instruction Overlay  */ }
<div className="absolute bottom-md left-1/2 -translate-x-1/2 flex flex-col items-center bg-surface/90 backdrop-blur-sm px-md py-sm rounded-full shadow-sm border border-outline-variant/20 z-30">
<p className="text-label-lg font-label-lg text-primary text-center">Tap the globe and drag around<br/><span className="font-normal text-label-md">to explore other areas!</span></p>
<span className="material-symbols-outlined mt-xs text-on-surface-variant animate-bounce">touch_app</span>
</div>
</section>
{ /*  Category Shop Cards  */ }
<section className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-gutter mb-xl">
{ /*  Card 1  */ }
<a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-colors shadow-[0_4px_16px_rgba(13,61,49,0.02)] flex flex-col h-full" href="#">
<div className="p-sm pb-0">
<h3 className="text-label-lg font-label-lg text-on-surface">Shop<br/>womenswear</h3>
</div>
<div className="relative flex-grow p-sm mt-auto">
<div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center p-sm group-hover:bg-surface-variant transition-colors">
<img alt="Womenswear styling, long skirt and jacket, minimalist background." className="max-h-full max-w-full object-contain drop-shadow-md" data-alt="A beautifully styled flat-lay photograph of handcrafted women's clothing, featuring a flowing natural-fiber skirt and a structured, hand-dyed jacket. The garments are arranged artfully on a warm, textured off-white background, adhering to a premium, minimalist warm-modern aesthetic. The lighting is soft and diffused, emphasizing the high quality of the materials and the delicate details of the artisan craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWTgi5-yqX198iRDHyw5sYM4VevV-n2uhk9bR1fdIE2gl5Vx48IdWOHuegg-Lbim3ziZ1a8kzYPQUENDoG7mYmoKLivuCR7MBw07b1sM_6clhDmINQuPJ13dcGKZy_XTn7K4g_EikwYdOJ5MkqMZ3NgGgVW1RZePo77LWc78sBxMQhowKqeFRMm7oNXJJ-Yasr69pQrnbpl2m-hRxCVv3fgSvTI0j1QGsVuh6sF71nakU1emkqMOwqA7Rz-D1vbSldqQupuSUsrRw"/>
</div>
</div>
</a>
{ /*  Card 2  */ }
<a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-colors shadow-[0_4px_16px_rgba(13,61,49,0.02)] flex flex-col h-full" href="#">
<div className="p-sm pb-0">
<h3 className="text-label-lg font-label-lg text-on-surface">Shop<br/>menswear</h3>
</div>
<div className="relative flex-grow p-sm mt-auto">
<div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center p-sm group-hover:bg-surface-variant transition-colors">
<img alt="Menswear outfit, rugged jacket and trousers." className="max-h-full max-w-full object-contain drop-shadow-md" data-alt="A cleanly styled presentation of men's slow-fashion apparel, showcasing a rugged, canvas work jacket paired with durable, ethically sourced trousers. The items are displayed against a clean, warm-toned backdrop that highlights their earthy color palette and sturdy construction. The image feels intentional and grounded, perfectly suited for a conscious consumer audience that values longevity and craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-bg9SfoL7dZ7i8qbWaHfGFsSUN0Bae9bqavaQfTvFHmeduvWPeFzD5WN4xdRiQ_w6WNVxKOHKvPi4HMvPeXD5gDpm_lzQvZkdtCCOaiDhQsmjo6RkA2nvO9xjsdzWh8hjpRHeNu6BQxn-lzRNeLId4p5Ym1WxkXFYJJV7DgqwHR3nbvcY-sWTc61QAafm7ZosEFGuwCDObKsVG62U6HOT887vBQub54f1T6l2GhmQN7SGQNZl_d4F5hSKKnNQw0klfBLign-wyjo"/>
</div>
</div>
</a>
{ /*  Card 3 & 4 Container for Desktop Grid  */ }
<div className="col-span-2 md:col-span-2 grid grid-cols-1 gap-sm">
{ /*  Card 3  */ }
<a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-colors shadow-[0_4px_16px_rgba(13,61,49,0.02)] flex items-center h-full" href="#">
<div className="p-sm w-1/2">
<h3 className="text-label-lg font-label-lg text-on-surface">Shop<br/>accessories</h3>
</div>
<div className="p-sm w-1/2 h-full">
<div className="h-full bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center p-sm group-hover:bg-surface-variant transition-colors">
<img alt="Leather bags and belts arranged neatly." className="max-h-full max-w-full object-contain drop-shadow-md" data-alt="A curated collection of handcrafted leather accessories, including a finely stitched satchel and several artisanal belts. The items are arranged with care on a subtle, warm-grey surface, illuminated by gentle directional lighting that brings out the rich patina and natural grain of the leather. The composition is elegant and modern, focusing on the tactile quality of the sustainable materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhyqopS8P_H7rgDwhN6EtYw7cgxPQVsRj4YtRWfpp4iadgk6KqpSI0MOYn93555Yf-dIkyJcRam-p52Fnke2mO2eaxfPdQZIMEag8i7PzX1ppBs7yKIvBIvY6xqZXcNuAbYDK4WRV9PWA8wyYkMboc0Y8kermZIPVbsPYRao8NgDNHRm8FVaAPr2XqXI1DrjiGVpIhjz5jvROoZKOI2s0R3v4RzfxgSkWUpkIiuF49hbDwMyxrKgWj31tMSyugCLxT595d8-dFRSs"/>
</div>
</div>
</a>
{ /*  Card 4  */ }
<a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-colors shadow-[0_4px_16px_rgba(13,61,49,0.02)] flex items-center h-full" href="#">
<div className="p-sm w-1/2">
<h3 className="text-label-lg font-label-lg text-on-surface">Shop<br/>other</h3>
</div>
<div className="p-sm w-1/2 h-full">
<div className="h-full bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center p-sm group-hover:bg-surface-variant transition-colors">
<img alt="Handcrafted socks and small knit items." className="max-h-full max-w-full object-contain drop-shadow-md" data-alt="A cozy assortment of hand-knit socks and small textile goods, arranged organically to showcase their intricate patterns and soft, natural yarns. The color palette leans towards earthy greens and warm neutrals, set against a pristine, light-mode background. The lighting is soft and inviting, emphasizing the 'slow fashion' ethos and the comforting, tactile nature of handmade crafts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX-CGilcrCdPU5jEf5RYditqy6YOBxun50IymQiK7M9QGdrHYW3verifB66TCbyxvg5GWAgdEZma9RCaOYZZ4GvRWqmjdFVBe-dwD9RFketWM4NslBGqJQo2yD1cSHCtXGTOXeTVlDJrJIGBYQGHL8Uvyc2asLf9cVfj1jQFCmxcV-UGDW5aFBFK0h8eqadoP20c8tOQ6DlvlaEk0kHm479ZsNfaLHGgCdr3AkFrq_q9K9U-ycixbM-6Z_I9Sstb4EgtyrQsoOv30"/>
</div>
</div>
</a>
</div>
</section>
{ /*  Artisans Ecosystem Section (Banner Style)  */ }
<section className="bg-secondary-fixed rounded-2xl p-lg overflow-hidden relative shadow-sm">
<div className="relative z-10 max-w-2xl">
<h2 className="text-headline-lg font-headline-lg text-on-secondary-fixed mb-md font-bold">Artisans in our ecosystem</h2>
{ /*  Collage of Artisan Faces  */ }
<div className="flex flex-wrap gap-sm mt-md">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface/50 shadow-sm">
<img alt="Portrait of artisan smiling." className="w-full h-full object-cover" data-alt="A close-up, authentic portrait of a smiling artisan in their workshop, conveying warmth and dedication to their craft. Soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAiRWwsWXEdbhjl6qRWZCc2T-mSlthAw-ZcEIiqqf7wEnS4P37L9NZEeQ1k2ZE2e7Jk7DeggJHAXJxdbtqYNqyz-lKIE3mSHcC4_rOHGQz3A_iQlv0YbeXEkkvx28Lx0BxiU1tF87jkGLg8xvMb8MnHjYAtTqqIXMRtGeE2XcwmTKKAfHKx1iLpma7VEMASijXAe9tGI3hPxBB355Azp1bWX3ESjixFPHTRCUBXDgxf0EiB7ygm0GCBgzP8abIr_n2vRafKhaqe2c"/>
</div>
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface/50 shadow-sm -mt-4">
<img alt="Portrait of artisan looking thoughtful." className="w-full h-full object-cover" data-alt="An environmental portrait of a thoughtful artisan, surrounded by the tools of their trade, shot with a warm modern aesthetic and natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGrYZiG_hfqEswkOdZ3hSzTl2pu6AWPLSnw_6fsTNWiSmmdLxCDspj8uO7YApdxJFSHWu0KAvpqxill19_KWxl3xK53CZLoPI5tKIYyUE79xY_M_uuwHLWO-7Wn_RaCJ1TXmMMYhfFQwXWcm2cUtP38MmxawzVKhOmObu-IXepY4wP59z6Hp5v9fr9QlDeSha5eNaUqPFfHMSoPF2R9rfE5RPx4LpLhoGlu0xODA6pAg0ESCRI9HvD876YxksSJvfbf5lSRzUSFUk"/>
</div>
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface shadow-md z-10 -ml-4">
<img alt="Older artisan focusing on intricate work." className="w-full h-full object-cover" data-alt="A compelling portrait of an elder artisan deeply focused on intricate handiwork. Warm, directional light highlights the texture of their hands and face, embodying the slow craft movement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5VKv0jV9PfZe9Oce_9Fng2AoJHXpsZygXoBZBX71JF-odsCeBrBzGlMilWEidHGTraXlBtyiNFopsalI7LtjmW8IgY_gPbpZw2XG5sOQJGaUNKgQE7ApMix-fYLOOeHzRLZI7GwJIfSrVXf0TIj8LNkAN32Y8U4yUxskcxoHngCBy-Ne77I2DGLKJwOOomYKFPmBNlb9iQh2woFliG8IHEmIDvk2UO9Ti1Bfy-QuUzI1FPMu2bQuKsD-luiwPehppw9iTd7-SJDU"/>
</div>
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface/50 shadow-sm mt-2">
<img alt="Young artisan holding finished product." className="w-full h-full object-cover" data-alt="A portrait of a young, proud artisan holding a finished piece of craftwork, smiling gently at the camera in a brightly lit, modern studio space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6kpp6m3CRz3C8EyC1AozByJmhaD98YfiBimVnVpptMbb4Ub8N4OvNXFAjS7zHz4Ko9s3TtoKvEUmNoTZkKzOzovECt3js-yfsmdaQ7QjmxkUQYuhkBSXWL3t4883fNj3vIXqqe4jdx3fRjzOd_brrO6lMcmGRpFkHVRHcRhF6I8p0PPtGGbK7l7VRLPLsCbP0awI1FDmpDqEsY-XqAvWGHf9ZomT6xjpPIgnYJ_vSqM0_H9X7HyrmNBhdrRdAoRB5Te3iN0WmNQ"/>
</div>
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface/50 shadow-sm -mt-2 -ml-2">
<img alt="Artisan in workshop setting." className="w-full h-full object-cover" data-alt="A candid portrait of a male artisan in his element, surrounded by materials in a rustic workshop. The scene uses warm, earthy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDft-sRidYRdkkKLvK_XYfjy3Sp2TmzGSSJRjcbGV_oCXDTZql9oD9Bz99cy-_6fF1KTKDm0rqOEWZpx52k4euYUvDUCQmhPx_gxdMwOySENqzYoRAFY7qdEX1v9s2dkZax2yTdFu-gmYTzcFBBc7ygvUA8hftfps7ZXrlgu2q_VCFMG2Q_Q8d_6yaRvlAxwr0pOqy9SNwbmH_mhJF-WzhwEcIEpA2Mn3DwD68CKo25v3B36T3zHvtpgKDOsdE43kNIAPth5xvgnnw"/>
</div>
</div>
</div>
{ /*  Decorative background elements  */ }
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary-fixed/20 to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
</section>
</main>
{ /*  Footer  */ }
<footer className="w-full py-lg mt-xl bg-primary dark:bg-primary-container max-w-container-max mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-on-primary dark:text-on-primary-container flat no shadows">
<div className="col-span-1 lg:col-span-2">
<h2 className="text-headline-lg font-headline-lg text-primary-fixed mb-sm">Craftline</h2>
<p className="text-body-md font-body-md text-on-primary/80 mb-md max-w-md">Bridging the gap between maker and seeker.</p>
<p className="text-label-md font-label-md text-on-primary/60">© 2025 Craftline. All rights reserved.</p>
</div>
<div className="flex flex-col gap-sm">
<h3 className="text-label-lg font-label-lg text-secondary-fixed mb-xs">Explore</h3>
<a className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Provenance</a>
<a className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Materials</a>
<a className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Care Guide</a>
</div>
<div className="flex flex-col gap-sm">
<h3 className="text-label-lg font-label-lg text-secondary-fixed mb-xs">Connect</h3>
<a className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Artisan Login</a>
<a className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Contact</a>
</div>
</footer>
    </div>
  );
};

export default DiscoveryHome;
