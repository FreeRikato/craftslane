import React from 'react';

const CuratedStories: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  TopNavBar (Shared Component)  */ }
<nav className="bg-surface/80 dark:bg-primary/80 backdrop-blur-md text-primary dark:text-primary-fixed docked full-width top-0 sticky z-50 bg-surface-container-low/60 dark:bg-primary-container/40 shadow-sm transition-all duration-300 ease-in-out active:scale-95">
<div className="flex justify-between items-center w-full px-md py-sm max-w-container-max mx-auto">
{ /*  Left Side: Search & Brand  */ }
<div className="flex items-center gap-md">
<a className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim shrink-0" href="/">
                    Craftline
                </a>
<div className="hidden md:flex relative group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant">search</span>
<input className="pl-[40px] pr-sm py-[8px] bg-transparent border border-outline-variant rounded-full text-body-md font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-64" placeholder="Search stories, artisans..." type="text"/>
</div>
</div>
{ /*  Center: Navigation Links (Desktop)  */ }
<ul className="hidden md:flex items-center gap-md">
<li><a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs" href="#">Discover</a></li>
<li><a className="text-primary dark:text-secondary-fixed font-bold border-b-2 border-primary dark:border-secondary-fixed pb-1 text-label-lg font-label-lg px-sm py-xs" href="#">Stories</a></li>
<li><a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs" href="#">Impact</a></li>
<li><a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg px-sm py-xs" href="#">Shop</a></li>
</ul>
{ /*  Right Side: Actions  */ }
<div className="flex items-center gap-sm">
<button className="hidden lg:block bg-primary text-on-primary text-label-lg font-label-lg px-md py-[10px] rounded-lg hover:bg-primary/90 transition-colors">
                    Adopt now!
                </button>
<div className="flex items-center gap-xs">
<button aria-label="favorite" className="p-xs text-on-surface-variant hover:bg-primary-fixed/10 rounded-full transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
<button aria-label="shopping_bag" className="p-xs text-on-surface-variant hover:bg-primary-fixed/10 rounded-full transition-colors">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
<button aria-label="menu" className="md:hidden p-xs text-on-surface-variant hover:bg-primary-fixed/10 rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</nav>
{ /*  Main Content Canvas  */ }
<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-lg">
{ /*  Header Section  */ }
<header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-md">
<div className="max-w-2xl">
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary text-balance mb-sm">
                    Let's Browse the world!
                </h1>
<p className="text-body-lg font-body-lg text-on-surface-variant">
                    A dedicated space for curated stories about brands, artisans, techniques, and cultural context.
                </p>
</div>
{ /*  Blog/Stories Toggle  */ }
<div className="flex items-center bg-surface-container-high rounded-full p-1 border border-outline-variant/30 shrink-0">
<button className="px-md py-sm rounded-full text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors">MAP</button>
<button className="px-md py-sm rounded-full bg-surface text-primary text-label-lg font-label-lg shadow-sm border border-outline-variant/20 transition-all">BLOG</button>
</div>
</header>
{ /*  Explore More Tags  */ }
<section className="mb-xl">
<h2 className="text-label-lg font-label-lg text-on-surface-variant mb-md uppercase tracking-wider">EXPLORE MORE!</h2>
<div className="flex flex-wrap gap-sm">
<a className="inline-flex items-center px-md py-2 rounded-full border border-outline-variant text-label-lg font-label-lg text-on-surface hover:bg-surface-variant transition-colors bg-surface" href="#">GET TO KNOW OUR ARTISANS</a>
<a className="inline-flex items-center px-md py-2 rounded-full border border-outline-variant text-label-lg font-label-lg text-on-surface hover:bg-surface-variant transition-colors bg-surface" href="#">NEW LISTED BRANDS</a>
<a className="inline-flex items-center px-md py-2 rounded-full border border-outline-variant text-label-lg font-label-lg text-on-surface hover:bg-surface-variant transition-colors bg-surface" href="#">MIX AND MATCH OF THE DAY</a>
<a className="inline-flex items-center px-md py-2 rounded-full border border-outline-variant text-label-lg font-label-lg text-on-surface hover:bg-surface-variant transition-colors bg-surface" href="#">LOCAL TECHNIQUES</a>
<button aria-label="More tags" className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors bg-surface">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</section>
{ /*  Bento Grid Layout for Stories  */ }
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{ /*  Featured Story Card (Large)  */ }
<article className="lg:col-span-8 bg-[#A3D186] rounded-[24px] p-md md:p-lg relative overflow-hidden flex flex-col md:flex-row gap-lg shadow-sm border border-[#8BB870]/30 group cursor-pointer transition-transform hover:-translate-y-1">
{ /*  Content Side  */ }
<div className="flex-1 flex flex-col justify-between z-10">
<div>
<div className="flex items-center gap-xs mb-md">
<span className="material-symbols-outlined text-primary"  >chat_bubble</span>
<span className="text-label-lg font-label-lg text-primary uppercase tracking-widest border-b border-primary pb-xs">TODAY'S STORY</span>
</div>
<h3 className="text-[32px] leading-[40px] font-bold text-primary mb-md font-serif italic pr-4">
                            From Tradition to Street Style:<br/>Sabai x Jeans
                        </h3>
<div className="text-body-md font-body-md text-primary/90 space-y-4 pr-md font-medium">
<p>A new wave of Thai style is turning the <strong>traditional sabai into something more everyday and wearable by pairing it with denim.</strong></p>
<p className="hidden md:block">The sabai is a traditional Thai wrap or draped cloth that has long been part of Thai dress. The look keeps the softness and cultural identity of the sabai, but gives it a more modern and casual edge.</p>
<p className="hidden md:block">It shows how traditional dress can move with current fashion while still carrying story, craft, and meaning.</p>
</div>
</div>
<div className="mt-lg">
<button className="bg-primary text-on-primary text-label-lg font-label-lg px-lg py-sm rounded-full hover:bg-primary/90 transition-colors shadow-md inline-flex items-center gap-xs">
                            Explore this style!
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{ /*  Images Side (Collage effect)  */ }
<div className="md:w-[280px] shrink-0 relative h-[300px] md:h-auto z-10 flex flex-col gap-sm">
{ /*  Top Image  */ }
<div className="rounded-xl overflow-hidden h-1/2 shadow-md border-2 border-surface/20">
<img alt="Two women in modern streetwear mixed with traditional Thai sabai wraps, standing near a tuk-tuk in a vibrant street." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Two fashionable individuals posing aggressively near a vibrant blue tuk-tuk on a sunny street in Thailand. They are wearing a fusion of traditional woven Thai sabai cloths draped over modern distressed denim jeans. The lighting is harsh natural sunlight, casting strong shadows, creating an edgy, modern street-style photography aesthetic within the Warm Modernity brand style. The background features blurred traditional Thai architecture, contrasting with their modern expressions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPSrhd3j_h105N7yp8FsF-8Q41R63HN3VzDvyB4xNRh5OL6WNmGho7u1gS0gEl7UUq43b-780LlfK4Nl-zZ8X05I6x8qtuhovzSL9dT5trTlNBo81_QfrTmRd6U3jRbn_iHw4SapReql5kMAW96G8eC-leW1jzvZVygjxLojG7bRQSc75lwHwze7GZ6l1hgM2UOO0fli_ujwc8_sTeHXt7DY5RW5iITN9ioE5S0jhJnHZlaBVIPcYIDT7VjjXJW8dz4dVcDM-mEQU"/>
</div>
{ /*  Bottom Image  */ }
<div className="rounded-xl overflow-hidden h-1/2 shadow-md border-2 border-surface/20 relative ml-md">
<img alt="Close up of a person wearing a delicate lace sabai top paired with casual jeans." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up fashion portrait of an individual wearing an intricately patterned, semi-sheer traditional Thai sabai top paired with casual blue denim. The setting is a bustling street in Bangkok with a brightly colored tuk-tuk slightly out of focus in the background. The mood is confident and contemporary. Natural, warm sunlight highlights the textures of the fabric, aligning with the brand's tactile and grounded visual tokens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu8Yyglal1tkDf0SGIhSBSiEMtgJNQqN5dRQhMfIxBLLcHdGvn6EyVrfpkSdm_zZj4Cu-v5aNiaH3Oo4PGhb8TWuhkra3O3yTKRN_rMQab_q4ckSacrZydOnJjj-aIKL_43Z0maV9NBaTx0w4Nn27vK01Q__53uIY99f3yUnMLBGNVU-c1S-jcreoBmygww7xePQmLwBSBn3QsqOJai3CLj0K1m_5_vNe_PUMXztLD45ZkS7EVAii62a17-eEniBzWUksL8vdT4us"/>
</div>
{ /*  Decorative element (Flag concept)  */ }
<div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-4 border-[#A3D186] shadow-sm z-20">
<img alt="Flag of Thailand" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOcxVZEwLXbwXlolppOdzd4iZJJsWNdBV-oi70OzF2Pwv4ryQlBlLEVZFPUxNmr-iGqXAtFhy3sQu_mcPkG2JeR0AsgOrQrX3bwXjwrRm9SdxJGydP8WHz1aaZgsjJxgfPLnrxmnqXmdMm3WL-Ec9Jt1XK9PUp6H5mhvryD3uvDrkG8T7iYFAY9gzLvFy4ap5N0GnrxXQDvJGL0XGTEEl5SIdwR0PZFISD9ZVsOBIulwJNV12QHL1c1xHdJ1ZMK768cs6qC7heJnw"/>
</div>
</div>
{ /*  Background decorative graphic (Subtle curve)  */ }
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
</article>
{ /*  Secondary Column for Smaller Cards  */ }
<div className="lg:col-span-4 flex flex-col gap-gutter">
{ /*  Secondary Story Card 1  */ }
<article className="bg-surface rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 group hover:shadow-md transition-all flex flex-col h-full">
<div className="h-[200px] relative overflow-hidden">
<img alt="Artisan working on a wooden loom" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A close-up, environmental portrait of an artisan's weathered hands working diligently on a traditional wooden handloom. Thick, natural wool threads in muted earthy tones are being woven into a complex pattern. The lighting is soft, warm, and natural, filtering through a nearby window, illuminating the dust motes in the air. The mood is quiet, focused, and deeply tactile, perfectly embodying the slow craft movement aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz8ouD3Ph692wO5zlsk9s-0Y42BpJMLcNC0b7lpvJEhMXukFx6Rv8uw2_pkyJOZ-KEunAxTLkIKKlEX2tKHlfVRALD81VdHohgxUinD0uM9PuG7kVcxAyhhbc_v57vRqbLDbxmY_bhT5h5b4Nhrbjqo1RR6oJpMp7UiLWqV-wQIDzv26H2JxevGt_VXtfzpVoUToEedGU32CgOxwt9SummshBZmQQFREkj1CQBMkn6UgA_yz2kaB-AXSSPxXArwLWTkv-V6VEDswQ"/>
<div className="absolute top-sm left-sm bg-secondary-container text-on-secondary-container text-label-md font-label-md px-2 py-1 rounded">
                            Techniques
                        </div>
</div>
<div className="p-md flex flex-col flex-grow">
<h4 className="text-headline-md font-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors line-clamp-2">
                            The Rhythm of the Loom: Oaxaca's Master Weavers
                        </h4>
<p className="text-body-md font-body-md text-on-surface-variant line-clamp-3 mb-md">
                            Discover the intricate math and rhythmic meditation required to operate a traditional Zapotec pedal loom, a skill passed down through generations.
                        </p>
<div className="mt-auto flex items-center justify-between text-label-md font-label-md text-outline">
<span>5 min read</span>
<span className="material-symbols-outlined text-[18px]">bookmark_border</span>
</div>
</div>
</article>
</div>
</div>
</main>
{ /*  Footer (Shared Component)  */ }
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-full py-lg mt-xl flat no shadows">
<div className="max-w-container-max mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="col-span-1 lg:col-span-2">
<div className="text-headline-lg font-headline-lg text-primary-fixed mb-md">
                    Craftline
                </div>
<p className="text-body-md font-body-md text-on-primary/80 dark:text-on-primary-container/80 max-w-sm mb-lg">
                    Bridging the gap between maker and seeker. We believe in the power of slow craft and transparent provenance.
                </p>
<div className="text-label-md font-label-md text-on-primary/60">
                    © 2025 Craftline. Bridging the gap between maker and seeker.
                </div>
</div>
<div>
<h3 className="text-label-lg font-label-lg text-primary-fixed mb-md uppercase tracking-wider">Explore</h3>
<ul className="space-y-sm flex flex-col items-start">
<li><a className="text-label-md font-label-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Provenance</a></li>
<li><a className="text-label-md font-label-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Materials</a></li>
<li><a className="text-label-md font-label-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Care Guide</a></li>
</ul>
</div>
<div>
<h3 className="text-label-lg font-label-lg text-primary-fixed mb-md uppercase tracking-wider">Connect</h3>
<ul className="space-y-sm flex flex-col items-start">
<li><a className="text-label-md font-label-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Artisan Login</a></li>
<li><a className="text-label-md font-label-md text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300" href="#">Contact</a></li>
</ul>
</div>
</div>
</footer>
    </div>
  );
};

export default CuratedStories;
