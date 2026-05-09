import React from 'react';

const ArtisanDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  SideNavBar (Generated from JSON)  */ }
<aside className="bg-surface text-primary h-full w-64 fixed left-0 top-0 overflow-y-auto border-r border-outline-variant shadow-md hidden lg:flex flex-col py-md z-40">
{ /*  Header  */ }
<div className="px-md pb-md mb-md border-b border-outline-variant/30 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full overflow-hidden mb-sm border-2 border-surface-variant">
<img alt="Artisan Profile" className="w-full h-full object-cover" data-alt="A candid, warm environmental portrait of a female artisan in her early 40s. She is smiling gently, standing in her sunlit pottery studio with raw clay and tools visible in the softly blurred background. The lighting is natural and inviting, emphasizing the tactile, grounded nature of her craft. The overall mood is authentic and human-centric, fitting a warm modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv_dNRXl7zAmVv9uMduG9TdbuATcm4HF9gC1wM8zB8oMad8KPt-jVHBfzMBKDH3kLatPl7ubKOXaIt7AF6PEC9Z3J7gtgSyK_FJB_p-majJcVGgVXgvSLZsa3lqo7ZYRFtOuoX44gHg_wN0FU4z74dPLQirYFZoBYjT12s-qS2XWCw0Q_zHRy7L7R2J4dGTs0rhFQ-QjjBetjDHMFKDDfD-WxOHdb2jJzFVGAAdhL0ENrNxeT-HodovXB8ndNHE3-X4NVI5RmD7kQ"/>
</div>
<h2 className="text-headline-md font-headline-md font-bold text-primary">Artisan Portal</h2>
<p className="text-label-md font-label-md text-on-surface-variant mt-xs">Sharing your craft with the world</p>
</div>
{ /*  Navigation Links  */ }
<nav className="flex-1 px-sm space-y-1">
{ /*  Active Tab: Artisan Profile (Dashboard Home)  */ }
<a className="flex items-center gap-sm px-4 py-3 bg-secondary-container text-on-secondary-container rounded-xl mx-2 my-1 transition-all duration-200 ease-out group" href="#">
<span className="material-symbols-outlined"  >person</span>
<span className="text-label-lg font-label-lg">Artisan Profile</span>
</a>
<a className="flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out group" href="#">
<span className="material-symbols-outlined">mic</span>
<span className="text-label-lg font-label-lg">Story Capture</span>
</a>
<a className="flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out group" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-label-lg font-label-lg">Earnings</span>
</a>
<a className="flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out group" href="#">
<span className="material-symbols-outlined">translate</span>
<span className="text-label-lg font-label-lg">Language</span>
</a>
<a className="flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out group" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-label-lg font-label-lg">Settings</span>
</a>
</nav>
{ /*  CTA  */ }
<div className="px-md mt-auto pt-md pb-sm">
<button className="w-full bg-primary text-on-primary text-label-lg font-label-lg py-3 rounded-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined">mic</span>
                Record New Story
            </button>
</div>
{ /*  Footer Links  */ }
<div className="px-md pb-sm space-y-1">
<a className="flex items-center gap-sm px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined text-sm">lock</span>
<span className="text-label-md font-label-md">Privacy</span>
</a>
<a className="flex items-center gap-sm px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined text-sm">help_outline</span>
<span className="text-label-md font-label-md">Help</span>
</a>
</div>
</aside>
{ /*  Main Content Area  */ }
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-gutter lg:p-lg max-w-container-max mx-auto w-full">
{ /*  Mobile Header (Visible only on small screens)  */ }
<header className="lg:hidden flex justify-between items-center mb-lg">
<div>
<h1 className="text-headline-md font-headline-md text-primary font-bold">Artisan Portal</h1>
</div>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
{ /*  Welcome Section  */ }
<section className="mb-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-gutter">
<div>
<p className="text-label-lg font-label-lg text-on-surface-variant mb-2">October 24, 2023</p>
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary">Welcome back, Elena.</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-sm max-w-2xl">Your craftsmanship continues to inspire. You have 3 pending stories waiting to be shared with your collectors.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg text-label-lg font-label-lg flex items-center gap-2 shrink-0 shadow-[0_4px_12px_rgba(13,61,49,0.15)] hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined">add_circle</span>
                Record New Story
            </button>
</section>
{ /*  Dashboard Bento Grid  */ }
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
{ /*  Earnings Snapshot (Level 1 Surface)  */ }
<div className="md:col-span-4 bg-surface-container-low rounded-xl p-md shadow-[0_4px_24px_rgba(13,61,49,0.04)] border border-surface-variant/50 flex flex-col">
<div className="flex justify-between items-center mb-lg">
<h3 className="text-headline-md font-headline-md text-primary">Earnings</h3>
<span className="material-symbols-outlined text-on-surface-variant">trending_up</span>
</div>
<div className="mt-auto">
<p className="text-label-md font-label-md text-on-surface-variant mb-1">This Month</p>
<p className="text-display-lg-mobile font-display-lg-mobile text-primary">$1,240.00</p>
<div className="flex items-center gap-2 mt-sm text-secondary">
<span className="material-symbols-outlined text-sm">arrow_upward</span>
<span className="text-label-md font-label-md">12% from last month</span>
</div>
</div>
</div>
{ /*  Active Stories Summary (Level 1 Surface)  */ }
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_24px_rgba(13,61,49,0.04)] border border-surface-variant/50 relative overflow-hidden group">
{ /*  Background Image (Ambient)  */ }
<div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover:opacity-30">
<img alt="Pottery Studio Details" className="w-full h-full object-cover" data-alt="A close-up view of a potter's workbench covered in dried clay dust and various wooden modeling tools. Several half-finished ceramic bowls rest in the background, bathed in warm, diffused natural light from a nearby window. The scene captures the raw, tactile essence of handmade craft in a modern, documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXexYLkulGV6bg0awtLvxs-r3GaW4kgpAPH09uAkygRS9OAZGK2wtbHSVD9TKUSeYv7Bk7chZVQo5hNI6o8qX4-DcjPKaD-p3NjfZeYHAK4dff4mk3gvuRO_axN8lEHF4Dx1jwoA9yunIxajNQmiGkzv4Z23vg_PX663IvbfxpMtQDN9Flxl_ez2Y3xv9Nj40WSiIF-lR9506X2we5rfNqOc2Y2SWTMDv_lnemrcHqVVfMPYC3uplUip5NEf2DExwltdAIRPHh1Ao"/>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-center mb-md">
<h3 className="text-headline-md font-headline-md text-primary">Active Stories</h3>
<a className="text-label-lg font-label-lg text-secondary underline underline-offset-4" href="#">View All</a>
</div>
<div className="mt-auto bg-surface/80 backdrop-blur-md rounded-lg p-sm border border-outline-variant/30 flex items-center gap-md">
<div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
<img alt="Glazing Process" className="w-full h-full object-cover" data-alt="A detail shot showing an artisan's hands carefully applying a deep green glaze to a textured ceramic vase. The lighting highlights the glossy wetness of the glaze against the matte raw clay. The aesthetic is authentic, highlighting the meticulous process of creation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_z2f-O1r3XCscLM0T3wKzbfIYjK5Yd4tinDXyEw6RQU_LTE2VVZo8id6npdQGAeGY9zTvL8ikPDWG85Uba_Jkxv4Sg_kpALjsjdYfD9ujuWl3yK-4tmaTvMxYnvi5rv7vedC_37G6levUk6Un1iw34UcbMwWRmadF4SI8cHNLkfseKFIBLeSn38CZxGfSEFUth2kG8XfSAthPyeiorvhxtDKU_FgDbpslM2oYUY3Ora0qXYGkeKcEANKHNyMUpzmGVRgE1UIBsxk"/>
</div>
<div className="flex-1">
<h4 className="text-body-lg font-body-lg text-primary font-medium">The Forged Iron Collection</h4>
<p className="text-label-md font-label-md text-on-surface-variant mt-xs">Drafting • 3 clips recorded</p>
</div>
<button className="p-2 text-primary hover:bg-primary-container rounded-full transition-colors">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
</div>
</div>
{ /*  Quick Action: Materials Request  */ }
<div className="md:col-span-12 lg:col-span-4 bg-[#B2D89A]/20 rounded-xl p-md border border-secondary-fixed/50 flex flex-col justify-center items-start">
<span className="material-symbols-outlined text-tertiary-container mb-sm text-3xl">inventory_2</span>
<h3 className="text-headline-md font-headline-md text-tertiary-container mb-xs">Material Restock</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-md">Your local cooperative has new recycled wool available.</p>
<button className="text-label-lg font-label-lg text-tertiary-container border border-tertiary-container px-4 py-2 rounded-lg hover:bg-tertiary-container hover:text-on-primary transition-colors">Request Materials</button>
</div>
{ /*  Quick Action: Community  */ }
<div className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-md border border-surface-variant/50 flex items-center gap-md">
<div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container text-4xl">forum</span>
</div>
<div>
<h3 className="text-headline-md font-headline-md text-primary mb-xs">Community Messages</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-sm">2 collectors have asked about the provenance of the Indigo Dye techniques you shared last week.</p>
<a className="text-label-lg font-label-lg text-secondary flex items-center gap-1 group" href="#">
                         Respond now <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default ArtisanDashboard;
