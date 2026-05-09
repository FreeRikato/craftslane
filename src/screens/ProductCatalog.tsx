import React from 'react';

const ProductCatalog: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  TopNavBar  */ }
<nav className="bg-surface/80 dark:bg-primary/80 backdrop-blur-md docked full-width top-0 sticky z-50 bg-surface-container-low/60 dark:bg-primary-container/40 shadow-sm transition-all duration-300 ease-in-out w-full">
<div className="flex justify-between items-center w-full px-md py-sm max-w-container-max mx-auto">
{ /*  Search (Left)  */ }
<div className="flex-1 flex items-center">
<button className="p-2 text-on-surface-variant dark:text-outline-variant hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95">
<span className="material-symbols-outlined"  >search</span>
</button>
</div>
{ /*  Brand Logo  */ }
<div className="flex-shrink-0 flex items-center justify-center">
<span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">Craftline</span>
</div>
{ /*  Trailing Actions & Navigation  */ }
<div className="flex-1 flex items-center justify-end gap-sm">
<div className="hidden md:flex gap-md mr-md">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg py-1" href="#">Discover</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg py-1" href="#">Stories</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-label-lg font-label-lg py-1" href="#">Impact</a>
<a className="text-primary dark:text-secondary-fixed font-bold border-b-2 border-primary dark:border-secondary-fixed pb-1 text-label-lg font-label-lg" href="#">Shop</a>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-lg font-label-lg hover:bg-primary-container transition-colors hidden md:block">Adopt now!</button>
<div className="flex gap-2 text-on-surface-variant dark:text-outline-variant">
<button className="p-2 hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95">
<span className="material-symbols-outlined"  >favorite</span>
</button>
<button className="p-2 hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95">
<span className="material-symbols-outlined"  >shopping_bag</span>
</button>
<button className="p-2 hover:bg-primary-fixed/10 dark:hover:bg-primary-container/50 rounded-lg transition-all duration-300 ease-in-out active:scale-95 md:hidden">
<span className="material-symbols-outlined"  >menu</span>
</button>
</div>
</div>
</div>
</nav>
{ /*  Main Content Canvas  */ }
<main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-lg py-lg md:py-xl">
{ /*  Header Section  */ }
<header className="mb-lg">
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-sm">Shop the Collection</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Discover unique, hand-crafted pieces created with intention and sustainable materials by our community of global artisans.</p>
</header>
{ /*  Filters & Layout Controls  */ }
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md border-b border-surface-variant pb-md">
<div className="flex flex-wrap gap-sm">
<button className="bg-primary text-on-primary px-4 py-2 rounded-full text-label-md font-label-md">All</button>
<button className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-label-md font-label-md hover:bg-surface-variant transition-colors">Womenswear</button>
<button className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-label-md font-label-md hover:bg-surface-variant transition-colors">Menswear</button>
<button className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-label-md font-label-md hover:bg-surface-variant transition-colors">Accessories</button>
</div>
<div className="flex items-center gap-sm">
<span className="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
<select className="bg-transparent border-none text-body-md font-body-md text-primary focus:ring-0 p-0 pr-6 cursor-pointer">
<option>New Arrivals</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
{ /*  Product Grid (Bento/Asymmetric style)  */ }
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[400px]">
{ /*  Featured Large Item  */ }
<article className="md:col-span-8 row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col justify-end">
<img alt="Hand-woven textile process" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A weaver working outdoors on a traditional wooden loom, creating a vibrant textile piece. Natural sunlight dapples through leaves overhead, illuminating the richly textured yarns in earthy greens and warm browns. The aesthetic is organic, focused, and deeply connected to nature, showcasing the meticulous craft process in a warm, cinematic light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGtgIer9PKXpN4eoYK2ijCwxTPIGdho2pHVJTTpnKqxQkqx-YU4ir418663FjEGXKv_kGE4qJBKkXZvNxVEX7GGzxahEKNJSYSvnpHaV2JWR9C8K-HbGaXOAugBdE5US9MaVxCzLO9d1kI-lTEB-2YJHiN-ocg4dfE__oQp20bVcmCqAOv0SMbOyhD3NG5QF_pRfd4lSuYDHcjIe8Eo6KHCf7RGreWLfwvv-ZwiA14DIQdFSLZn1w6q1eiE6seacgnZL-JxcF8Ns"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="relative p-lg z-10 w-full md:w-2/3">
<div className="flex gap-2 mb-sm">
<span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-label-md font-label-md">Hand-loomed</span>
<span className="bg-surface/80 backdrop-blur text-on-surface px-3 py-1 rounded-full text-label-md font-label-md">Womenswear</span>
</div>
<h2 className="text-headline-lg font-headline-lg text-on-primary mb-2">The Heritage Wrap</h2>
<p className="text-body-md font-body-md text-on-primary/90 mb-4 line-clamp-2">A versatile, generous wrap woven using indigenous techniques passed down through generations.</p>
<div className="flex justify-between items-end">
<div>
<p className="text-label-md font-label-md text-on-primary/80 mb-1">Crafted by</p>
<p className="text-body-lg font-body-lg text-on-primary font-medium">Elena R.</p>
</div>
<p className="text-headline-md font-headline-md text-on-primary">$185</p>
</div>
</div>
</article>
{ /*  Standard Items  */ }
<article className="md:col-span-4 row-span-1 group flex flex-col">
<div className="relative flex-grow overflow-hidden rounded-xl mb-sm bg-surface-container-low">
<img alt="Leather bag stitching" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of a leather artisan's hands meticulously stitching a raw leather bag. The setting is a rustic workbench cluttered with traditional tools, bathed in warm, diffused natural light from a nearby window. The visual style highlights texture, craftsmanship, and the rich, natural patina of the materials in a grounded, earthy color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnvkbiW0Yl-z09P3T2TMPSiCyQYjj_jRntw1IYqN0iO_cZ6oxlhd-K3fNEehb1eqacPyWdT3j0-X1wL8mUXOtOQhqtxaJOzkchkUa6q6Gi0OQMHKVjbGL26HjjO9O1qTQRQCMPzzStpci2QJ2J8MMvrtmVahABQD0f2i8NBkUm3GghHFO61sVqX6WmN9oHh3WodF0ERDieBNOM3dDiV49Lh8TLWgfE3cuOatuciJE7A80N-2S1pTcPpTG7pKhHuZGreI8ode1aZwI"/>
<button className="absolute top-4 right-4 p-2 bg-surface/80 backdrop-blur rounded-full text-primary hover:bg-surface transition-colors shadow-sm z-10">
<span className="material-symbols-outlined"  >favorite</span>
</button>
</div>
<div className="px-2">
<h3 className="text-body-lg font-body-lg text-on-surface mb-1">Saddle Hide Tote</h3>
<div className="flex justify-between items-baseline">
<p className="text-label-md font-label-md text-on-surface-variant">by Mateo V.</p>
<p className="text-body-md font-body-md text-primary font-medium">$240</p>
</div>
</div>
</article>
<article className="md:col-span-4 row-span-1 group flex flex-col">
<div className="relative flex-grow overflow-hidden rounded-xl mb-sm bg-surface-container-low">
<img alt="Ceramic bowls" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A collection of handmade ceramic bowls resting on a rough-hewn wooden table outdoors. The bowls feature organic, imperfect shapes and natural, earthy glazes in shades of sage green and raw clay. Soft, overcast daylight provides gentle, even illumination, emphasizing the tactile quality and serene, slow-living mood of the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-3fb70wY0R85iaJVCs7f1DRudhsd63XpLI-qNpfSTfhfUUViQSmn5aKoxlFaD6FUU6KcfYLbzVWZppRTJpdU8-_GZW3i62KGg7VzjjZvrTSEyuEf7dwdhZYCCT_KgYxCV7r_KFiQusucMJ-o-vjmqsgIToMM22z0q4ATOwkIAzMRLEze3K0c5p0cr5v6T4yv0NW3m2ho4OwPrl6kRid5ko56UL50lvJo5goxk3crvElH2qElNlvK9L63JDLEr4ieHh6F7_Gmt6A"/>
<button className="absolute top-4 right-4 p-2 bg-surface/80 backdrop-blur rounded-full text-primary hover:bg-surface transition-colors shadow-sm z-10">
<span className="material-symbols-outlined"  >favorite</span>
</button>
</div>
<div className="px-2">
<h3 className="text-body-lg font-body-lg text-on-surface mb-1">Earth Nested Bowls</h3>
<div className="flex justify-between items-baseline">
<p className="text-label-md font-label-md text-on-surface-variant">by Sarah T.</p>
<p className="text-body-md font-body-md text-primary font-medium">$95</p>
</div>
</div>
</article>
{ /*  Portrait Tall Item  */ }
<article className="md:col-span-6 row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col justify-end">
<img alt="Indigo dyed shirt" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An artisan wearing an oversized linen shirt standing in a sunlit workshop, holding up a naturally dyed, deep indigo fabric. The background is slightly blurred, showing vats of dye and hanging textiles. The lighting is bright and airy, capturing a modern, sustainable fashion aesthetic with a focus on raw, beautiful materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd3XHHmhy4kW9qlsaAs7LsMt0djreNGKYC3ShwvPqx_JwN59h9hQ-PCd3sVKDhf_QV6AwBEhAh20qmdIkeC2gceuIhqvQS1pDQU1AXmjQTJp_qGHqAi6lv1h2mbf-aBflwG8sJn2QqDba5lah2JxXr5_JwiVMiOYrnQsPSiYqzpnovFBoFA9g7wYZnTx5dAZz5rP5ShaKabPjsyi5_laNwzWJHHJIUeFoTdx9UyDHwNDZYCHiv5x1ogBEeXn1C77KRceUPScUXPhI"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent"></div>
<div className="relative p-lg z-10">
<span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-md font-label-md mb-4">Plant Dyed</span>
<h2 className="text-headline-md font-headline-md text-on-surface mb-2">Indigo Over-shirt</h2>
<div className="flex justify-between items-end">
<p className="text-label-md font-label-md text-on-surface-variant">by Kenji O.</p>
<p className="text-headline-md font-headline-md text-primary">$150</p>
</div>
</div>
</article>
{ /*  Grid of smaller items  */ }
<article className="md:col-span-3 row-span-1 group flex flex-col">
<div className="relative flex-grow overflow-hidden rounded-xl mb-sm bg-surface-container-low">
<img alt="Silver earrings" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of a pair of handmade silver earrings resting on a piece of slate. The earrings have an organic, hammered texture reflecting soft light. The setting is minimal and natural, utilizing cool grey and muted green tones to highlight the delicate, intentional craftsmanship of the jewelry piece." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcO2VZyqAN-UPYqlmLa62hafdIZUR3MTHrBd-she_5GMxenZyqbZlre9MBV6oOo0JlhTho1cCr4-FssG2Y2hFvDSnXSNRhyeh46I6M8N7xInCPimKZCgbr3UDw08a-bqiYcbyucMMC82EFsBtzJT6TLNbpJ87tsldhOHRJfh4gTLNcovYhaCi84KM8gg1LTrd649twS_okCdi_EnSb8Q-7-P5Y_lgDCliYqYoh43GGf9fWtPTU5AtEvemxHD_97R7ypse0qGv_oB4"/>
</div>
<div className="px-2">
<h3 className="text-body-md font-body-md text-on-surface mb-1">Hammered Hoops</h3>
<p className="text-label-md font-label-md text-on-surface-variant">by Linnea</p>
<p className="text-body-md font-body-md text-primary font-medium mt-1">$65</p>
</div>
</article>
<article className="md:col-span-3 row-span-1 group flex flex-col">
<div className="relative flex-grow overflow-hidden rounded-xl mb-sm bg-surface-container-low">
<img alt="Wool beanie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A rugged, hand-knitted wool beanie in a deep forest green color, resting on a mossy log in a woodland setting. The natural, dappled sunlight highlights the thick, textured yarn. The mood is cozy, outdoorsy, and sustainable, emphasizing the natural provenance of the materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHvY8dRfpo7q27PTFYBHksBsKZkTnwXYE0rDG0Gl5qjcK-5grj8RaVPdMA5oHs9Wap7XQv1li47ZCL98_yAxH1bawcypliqLK8QuLpDzHluzPoVZf-xnVdA9TMshuMUfh-5koEH_RrKNPN0ukzQOXWokg6dyXM3S9eReMP0JvXzA4yuRH9olW0AXefjk3QCZtxc7EoYrWd-jKeMfCyVx88bIgwTmYg9U-jHW3rddNA5CPH4wUWyev3kCHNhFb7Aa66Y88wLkicZes"/>
</div>
<div className="px-2">
<h3 className="text-body-md font-body-md text-on-surface mb-1">Forest Knitted Beanie</h3>
<p className="text-label-md font-label-md text-on-surface-variant">by The Wool Coop</p>
<p className="text-body-md font-body-md text-primary font-medium mt-1">$45</p>
</div>
</article>
{ /*  Process Highlight Card (Spanning remaining space)  */ }
<article className="md:col-span-6 row-span-1 bg-surface-container rounded-xl p-md flex flex-col md:flex-row items-center gap-md border border-outline-variant/30">
<div className="w-full md:w-1/3 h-48 md:h-full relative rounded-lg overflow-hidden flex-shrink-0">
<img alt="Pottery process" className="absolute inset-0 w-full h-full object-cover" data-alt="A close-up view of hands working a piece of raw clay on a potter's wheel. The clay is wet and earthy. The background is a slightly blurred, sunlit studio with tools hanging on a worn wooden wall. The image conveys a strong sense of touch, creation, and authentic, slow-paced craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnZf_y9CgI0TkYmCUuArySM4IDAU77Tk9MZCkSGiLwEkKIG2ap8LT3KBYXWU4LiOJozUdy73lkjqAVhchXk758QlcJ_FBrCxK7GfmHqIrwz2z5kK62f3OYy5ikioxQFGzwuIIuBICpTTroj_Khplq5tF7rNdk7C7p3-a3KwYaOH1lwTWzBNf1FXycrstKR6GrTAWV5U2sC6GZribhRqLuv0uNvr41X27T6B-Ho937Nk99jPTQql0sejfKP6n7dZ7G4XhoGlK1Czf8"/>
</div>
<div className="flex-grow">
<h3 className="text-headline-md font-headline-md text-primary mb-2">The Process Matters</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Every piece in our catalog tells a story of time, patience, and skill. We believe in transparency from raw material to finished good.</p>
<a className="inline-flex items-center text-label-lg font-label-lg text-secondary hover:text-primary transition-colors" href="#">
                         Read Artisan Stories <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</article>
</div>
{ /*  Load More  */ }
<div className="mt-xl text-center">
<button className="border border-primary text-primary px-8 py-3 rounded-lg text-label-lg font-label-lg hover:bg-primary hover:text-on-primary transition-colors">Load More Craft</button>
</div>
</main>
{ /*  Footer  */ }
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-full py-lg mt-xl flat no shadows">
<div className="max-w-container-max mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-2 lg:col-span-1 mb-8 lg:mb-0">
<div className="text-headline-lg font-headline-lg text-primary-fixed mb-4">Craftline</div>
<p className="text-body-md font-body-md text-on-primary/80 mb-6 max-w-xs">Connecting conscious seekers with the world's most dedicated makers.</p>
</div>
<div className="col-span-1">
<h4 className="text-label-lg font-label-lg text-secondary-fixed mb-4 uppercase tracking-wider">Explore</h4>
<ul className="space-y-3 flex flex-col">
<li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300 text-label-md font-label-md" href="#">Provenance</a></li>
<li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300 text-label-md font-label-md" href="#">Materials</a></li>
<li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300 text-label-md font-label-md" href="#">Care Guide</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-label-lg font-label-lg text-secondary-fixed mb-4 uppercase tracking-wider">Community</h4>
<ul className="space-y-3 flex flex-col">
<li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300 text-label-md font-label-md" href="#">Artisan Login</a></li>
<li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-on-primary hover:opacity-100 transition-opacity duration-300 text-label-md font-label-md" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2 lg:col-span-1 mt-8 lg:mt-0 flex flex-col justify-between">
<div>
<h4 className="text-label-lg font-label-lg text-secondary-fixed mb-4 uppercase tracking-wider">Newsletter</h4>
<div className="relative">
<input className="w-full bg-transparent border-b border-on-primary/30 text-on-primary placeholder-on-primary/50 py-2 focus:outline-none focus:border-secondary-fixed transition-colors text-body-md font-body-md" placeholder="Your email" type="email"/>
<button className="absolute right-0 top-2 text-secondary-fixed hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<div className="max-w-container-max mx-auto px-md mt-12 pt-8 border-t border-on-primary/20 text-center lg:text-left">
<p className="text-label-md font-label-md text-on-primary/60">© 2025 Craftline. Bridging the gap between maker and seeker.</p>
</div>
</footer>
    </div>
  );
};

export default ProductCatalog;
