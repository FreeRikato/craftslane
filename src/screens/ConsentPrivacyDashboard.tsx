import React from 'react';

const ConsentPrivacyDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  SideNavBar (Shared Component)  */ }
<nav className="h-full w-64 fixed left-0 top-0 overflow-y-auto hidden lg:flex flex-col py-md bg-surface border-r border-outline-variant shadow-md z-40">
{ /*  Header  */ }
<div className="px-md mb-xl flex flex-col items-start gap-sm">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-sm bg-surface-container-high border-2 border-primary-container/20">
<img alt="Artisan Profile" className="w-full h-full object-cover" data-alt="A close-up, warm environmental portrait of an artisan smiling gently. The lighting is soft and natural, suggesting a workspace setting. The mood is welcoming and authentic, fitting the grounded, human-centric design system of the Artisan Portal. The image uses a raw, unedited style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtGTk_YqGLaodsZfCVY_Zz1MyCJKvatzKsDQqetcva3bE2QEK-inYK_FhT80TzlcDyX1i0fEJcRZYmZhB_zEA123dC1oggcYUznmfmk4VPgUMCQy-wqUJB-36MC2xbS-fBizJuhOFGc1Z2pyA0ZoQoyrHnr7VRvvqgs-cyM-Jg2Z9QKe7_BR2H1QyHskiGdw2Q6FEMubqfyww27JyNyyr74hZrTwyhwhQ9w7HmTqEHLo6DpT2EA_a6SxJs9RODRKnEDTzUcdZmvtU"/>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary">Artisan Portal</h1>
<p className="text-label-md font-label-md text-on-surface-variant">Sharing your craft with the world</p>
</div>
</div>
{ /*  CTA  */ }
<div className="px-md mb-lg">
<button className="w-full bg-primary-container text-on-primary font-label-lg text-label-lg py-sm px-md rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined"  >add_circle</span>
                Record New Story
            </button>
</div>
{ /*  Main Navigation  */ }
<div className="flex-1 px-sm">
{ /*  Inactive  */ }
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-label-lg font-label-lg">Artisan Profile</span>
</a>
{ /*  Inactive  */ }
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">mic</span>
<span className="text-label-lg font-label-lg">Story Capture</span>
</a>
{ /*  Inactive  */ }
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-label-lg font-label-lg">Earnings</span>
</a>
{ /*  Inactive  */ }
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">translate</span>
<span className="text-label-lg font-label-lg">Language</span>
</a>
{ /*  Active  */ }
<a className="flex items-center gap-md py-sm px-md bg-secondary-container text-on-secondary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all shadow-sm" href="#">
<span className="material-symbols-outlined"  >settings</span>
<span className="text-label-lg font-label-lg">Settings</span>
</a>
</div>
{ /*  Footer Navigation  */ }
<div className="px-sm mt-auto pt-lg border-t border-surface-container-high mx-md">
<a className="flex items-center gap-md py-sm px-xs text-on-surface-variant hover:bg-surface-variant rounded-xl duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">lock</span>
<span className="text-label-md font-label-md">Privacy</span>
</a>
<a className="flex items-center gap-md py-sm px-xs text-on-surface-variant hover:bg-surface-variant rounded-xl duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="text-label-md font-label-md">Help</span>
</a>
</div>
</nav>
{ /*  Main Content Canvas  */ }
<main className="flex-1 lg:ml-64 h-full overflow-y-auto bg-background relative">
{ /*  Mobile Top Nav (Fallback)  */ }
<div className="lg:hidden sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-surface-container-high px-margin-mobile py-sm flex justify-between items-center shadow-sm">
<h1 className="text-headline-md font-headline-md font-bold text-primary">Settings</h1>
<button className="text-on-surface-variant p-2">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile lg:px-lg py-lg lg:py-xl flex flex-col gap-xl">
{ /*  Page Header  */ }
<header className="flex flex-col gap-sm max-w-3xl">
<h2 className="text-display-lg-mobile lg:text-display-lg font-display-lg-mobile lg:font-display-lg text-primary">Consent &amp; Publishing</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">Control how your stories and craft are shared with the global community. You always own your narrative.</p>
</header>
{ /*  Bento Grid Layout for Controls  */ }
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{ /*  Authorship Settings (Spans 8 columns)  */ }
<section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md lg:p-lg shadow-sm border border-surface-container-high relative overflow-hidden flex flex-col gap-md">
{ /*  Subtle Decorative Background  */ }
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="flex items-center gap-sm mb-sm border-b border-surface-container-low pb-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined"  >history_edu</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary">Authorship</h3>
</div>
<p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">Manage the specific elements of your craft story that are visible to consumers. Toggle these settings to fit your comfort level.</p>
<div className="flex flex-col gap-sm mt-sm">
{ /*  Toggle Item 1  */ }
<div className="flex items-center justify-between p-sm lg:p-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-surface-container-highest">
<div className="flex flex-col gap-xs">
<span className="text-label-lg font-label-lg text-on-surface">Voice Recordings</span>
<span className="text-label-md font-label-md text-on-surface-variant">Allow consumers to hear your original voice alongside the translated text.</span>
</div>
{ /*  Custom Toggle Switch  */ }
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="toggle-voice" name="toggle-voice" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle-voice"></label>
</div>
</div>
{ /*  Toggle Item 2  */ }
<div className="flex items-center justify-between p-sm lg:p-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-surface-container-highest">
<div className="flex flex-col gap-xs">
<span className="text-label-lg font-label-lg text-on-surface">Workshop Photos</span>
<span className="text-label-md font-label-md text-on-surface-variant">Share unedited environmental photos of your making process.</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="toggle-photos" name="toggle-photos" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle-photos"></label>
</div>
</div>
{ /*  Toggle Item 3  */ }
<div className="flex items-center justify-between p-sm lg:p-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-surface-container-highest">
<div className="flex flex-col gap-xs">
<span className="text-label-lg font-label-lg text-on-surface">Artisan Name Display</span>
<span className="text-label-md font-label-md text-on-surface-variant">Show your full name instead of just region or workshop name.</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="toggle-name" name="toggle-name" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle-name"></label>
</div>
</div>
</div>
</section>
{ /*  Privacy Control (Spans 4 columns)  */ }
<section className="md:col-span-4 bg-surface-container-lowest rounded-xl p-md lg:p-lg shadow-sm border border-surface-container-high flex flex-col gap-md">
<div className="flex items-center gap-sm mb-sm border-b border-surface-container-low pb-sm">
<div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined"  >my_location</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary">Privacy Control</h3>
</div>
<p className="text-body-md font-body-md text-on-surface-variant">Protect your precise location while maintaining authenticity. We only use region-level data.</p>
<div className="mt-auto bg-surface-container-low p-sm rounded-lg flex flex-col gap-sm border border-surface-container-highest">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<span className="text-label-lg font-label-lg">Region-Level Sharing Active</span>
</div>
<p className="text-label-md font-label-md text-on-surface-variant pl-8">Currently displaying: "Oaxaca, Mexico" to consumers. Your exact workshop address is private.</p>
</div>
<button className="mt-sm w-full bg-surface border-2 border-secondary text-secondary font-label-lg text-label-lg py-sm px-md rounded-lg shadow-sm hover:bg-secondary hover:text-on-secondary transition-colors">
                        Manage Location Details
                    </button>
</section>
{ /*  Multilingual Interface & Status (Spans 12 columns, split internally)  */ }
<section className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter">
{ /*  Multilingual Interface  */ }
<div className="bg-primary text-on-primary rounded-xl p-md lg:p-lg shadow-sm relative overflow-hidden flex flex-col justify-between">
{ /*  Decorative texture  */ }
<div className="absolute inset-0 opacity-10 pointer-events-none"  ></div>
<div className="relative z-10">
<div className="flex items-center gap-sm mb-md">
<div className="w-10 h-10 rounded-full bg-on-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed"  >language</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary-fixed">Interface Language</h3>
</div>
<p className="text-body-md font-body-md text-on-primary/80 mb-lg max-w-sm">Set your preferred language for using the Artisan Portal. This does not affect how your stories are translated for consumers.</p>
</div>
<div className="relative z-10 bg-primary-container p-sm rounded-lg border border-on-primary/20 flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="text-label-lg font-label-lg text-on-primary">Current: Spanish (Español)</span>
</div>
<button className="text-secondary-fixed hover:text-on-primary font-label-lg text-label-lg transition-colors flex items-center gap-1">
                                 Change <span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
</div>
{ /*  Story Status Indicators  */ }
<div className="bg-surface-container-lowest rounded-xl p-md lg:p-lg shadow-sm border border-surface-container-high flex flex-col gap-md">
<div className="flex items-center gap-sm mb-sm border-b border-surface-container-low pb-sm">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined"  >inventory_2</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary">Story Status</h3>
</div>
<p className="text-body-md font-body-md text-on-surface-variant mb-sm">A quick overview of your recorded craft narratives and their current visibility state.</p>
<div className="flex flex-col gap-xs">
{ /*  Status Item: Published  */ }
<div className="flex items-center justify-between p-sm rounded-lg bg-surface border border-surface-container-highest">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-label-lg font-label-lg text-on-surface">Published Stories</span>
</div>
<span className="text-headline-md font-headline-md text-secondary font-bold">12</span>
</div>
{ /*  Status Item: Draft/Private  */ }
<div className="flex items-center justify-between p-sm rounded-lg bg-surface border border-surface-container-highest">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<span className="text-label-lg font-label-lg text-on-surface">Private Drafts</span>
</div>
<span className="text-headline-md font-headline-md text-on-surface-variant font-bold">3</span>
</div>
</div>
<button className="mt-auto w-full text-center text-primary hover:text-primary-container font-label-lg text-label-lg py-sm transition-colors border-t border-surface-container-low">
                            View All Stories
                        </button>
</div>
</section>
</div>
{ /*  Save Action Banner  */ }
<div className="sticky bottom-0 lg:bottom-md w-full bg-surface-container-lowest border-t lg:border border-surface-container-high p-md shadow-lg rounded-t-xl lg:rounded-xl flex flex-col sm:flex-row justify-between items-center gap-md z-20">
<div className="flex flex-col">
<span className="text-label-lg font-label-lg text-on-surface">Unsaved Changes</span>
<span className="text-label-md font-label-md text-on-surface-variant">You have modified your Authorship settings.</span>
</div>
<div className="flex gap-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-none bg-surface text-on-surface-variant border border-outline-variant font-label-lg text-label-lg py-sm px-md rounded-lg shadow-sm hover:bg-surface-variant transition-colors">
                        Discard
                    </button>
<button className="flex-1 sm:flex-none bg-primary-container text-on-primary font-label-lg text-label-lg py-sm px-md rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                        Save Preferences
                    </button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default ConsentPrivacyDashboard;
