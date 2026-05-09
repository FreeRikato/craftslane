import React from 'react';

const ArtisanStoryCapture: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  SideNavBar (Shared Component Blueprint)  */ }
<nav className="h-full w-64 fixed left-0 top-0 overflow-y-auto hidden lg:flex flex-col py-md border-r border-outline-variant bg-surface shadow-md z-40">
{ /*  Header  */ }
<div className="px-md mb-xl flex flex-col items-start gap-sm">
<div className="w-16 h-16 rounded-full bg-surface-container-highest overflow-hidden border-2 border-surface-container flex items-center justify-center">
{ /*  Fallback icon if image doesn't load  */ }
<span className="material-symbols-outlined text-outline text-[32px]">person</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary">Artisan Portal</h1>
<p className="text-body-md font-body-md text-on-surface-variant">Sharing your craft with the world</p>
</div>
</div>
{ /*  CTA  */ }
<div className="px-md mb-lg">
<button className="w-full bg-primary-container text-on-primary py-sm px-md rounded-lg text-label-lg font-label-lg hover:bg-primary transition-all duration-200 ease-out shadow-sm flex items-center justify-center gap-sm">
<span className="material-symbols-outlined"  >add</span>
                Record New Story
            </button>
</div>
{ /*  Navigation Links  */ }
<div className="flex-1 flex flex-col gap-xs px-xs">
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-label-lg font-label-lg" href="#">
<span className="material-symbols-outlined text-[24px]">person</span>
                Artisan Profile
            </a>
{ /*  Active Tab  */ }
<a className="flex items-center gap-sm px-sm py-sm bg-secondary-container text-on-secondary-container rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-label-lg font-label-lg" href="#">
<span className="material-symbols-outlined text-[24px]"  >mic</span>
                Story Capture
            </a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-label-lg font-label-lg" href="#">
<span className="material-symbols-outlined text-[24px]">payments</span>
                Earnings
            </a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-label-lg font-label-lg" href="#">
<span className="material-symbols-outlined text-[24px]">translate</span>
                Language
            </a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-label-lg font-label-lg" href="#">
<span className="material-symbols-outlined text-[24px]">settings</span>
                Settings
            </a>
</div>
{ /*  Footer Links  */ }
<div className="mt-auto px-xs pt-md border-t border-surface-container-highest">
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-body-md font-body-md" href="#">
<span className="material-symbols-outlined text-[20px]">lock</span>
                Privacy
            </a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant rounded-xl mx-2 my-1 transition-all duration-200 ease-out text-body-md font-body-md" href="#">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
                Help
            </a>
</div>
</nav>
{ /*  Main Content Area  */ }
<main className="flex-1 ml-0 lg:ml-64 relative min-h-screen">
{ /*  Mobile Header (Visible only on small screens)  */ }
<header className="lg:hidden flex items-center justify-between p-margin-mobile bg-surface sticky top-0 z-30 border-b border-surface-container-highest">
<h1 className="text-headline-md font-headline-md font-bold text-primary">Story Capture</h1>
<button className="text-on-surface">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<div className="max-w-container-max mx-auto p-margin-mobile md:p-md lg:p-lg xl:py-xl flex flex-col gap-lg">
{ /*  Page Header  */ }
<div className="flex flex-col gap-xs">
<span className="text-label-md font-label-md text-on-surface-variant tracking-widest uppercase">Guided Session</span>
<h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface">Capture the Process</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mt-xs">Use your voice to document the journey of your craft. Speak naturally in your preferred language.</p>
</div>
{ /*  Bento Grid Layout for Main Interface  */ }
<div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
{ /*  Primary Recording Area (Spans 8 cols on large screens)  */ }
<div className="xl:col-span-8 flex flex-col gap-md">
{ /*  The Recording Card (Level 1 Elevation)  */ }
<div className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-container-highest shadow-[0_4px_24px_rgba(13,61,49,0.04)] relative overflow-hidden flex flex-col items-center text-center">
{ /*  Decorative background element for warmth  */ }
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary-container/30 to-transparent pointer-events-none"></div>
{ /*  Current Prompt  */ }
<div className="max-w-xl mx-auto mb-xl relative z-10 mt-md">
<span className="inline-flex items-center gap-xs px-sm py-xs bg-primary-fixed/20 text-on-primary-fixed-variant rounded-full text-label-md font-label-md mb-md">
<span className="material-symbols-outlined text-[16px]">lightbulb</span>
                                Prompt 1 of 3
                            </span>
<h3 className="text-headline-lg font-headline-lg text-on-surface leading-tight">Tell us about the materials you selected for this piece.</h3>
<p className="text-body-md font-body-md text-on-surface-variant mt-sm">Where did they come from? Why did you choose them?</p>
</div>
{ /*  Core Interaction: The Microphone  */ }
<div className="relative flex items-center justify-center w-full py-lg z-10">
{ /*  Visual Audio Waveform (Static representation of active listening)  */ }
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-1 opacity-20 pointer-events-none">
<div className="w-1 h-8 bg-primary rounded-full"></div>
<div className="w-1 h-16 bg-primary rounded-full"></div>
<div className="w-1 h-12 bg-primary rounded-full"></div>
<div className="w-1 h-24 bg-primary rounded-full"></div>
<div className="w-1 h-10 bg-primary rounded-full"></div>
<div className="w-1 h-32 bg-primary rounded-full"></div> { /*  Center high point  */ }
<div className="w-1 h-14 bg-primary rounded-full"></div>
<div className="w-1 h-20 bg-primary rounded-full"></div>
<div className="w-1 h-8 bg-primary rounded-full"></div>
<div className="w-1 h-12 bg-primary rounded-full"></div>
</div>
{ /*  Giant Record Button  */ }
<button className="relative group z-20">
{ /*  Pulsing ring effect layers  */ }
<div className="absolute inset-0 rounded-full bg-primary-container/20 scale-125 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
<div className="absolute inset-0 rounded-full bg-primary-container/40 scale-110 group-hover:scale-125 transition-transform duration-300 ease-out"></div>
<div className="relative w-24 h-24 md:w-32 md:h-32 bg-primary-container text-on-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
<span className="material-symbols-outlined text-[48px] md:text-[64px]"  >mic</span>
</div>
</button>
</div>
<div className="mt-md text-label-lg font-label-lg text-primary z-10">
                            Tap to start recording
                        </div>
</div>
{ /*  Secondary Actions Row  */ }
<div className="grid grid-cols-2 sm:grid-cols-3 gap-sm md:gap-md">
{ /*  Add Photos Card  */ }
<button className="bg-surface rounded-xl p-sm md:p-md border border-surface-container-highest shadow-sm hover:bg-surface-variant hover:border-outline-variant transition-colors flex flex-col items-center justify-center gap-sm text-center min-h-[120px]">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">add_a_photo</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">Add Photos</h4>
<span className="text-label-md font-label-md text-on-surface-variant">Visual context</span>
</div>
</button>
{ /*  Review & Translate Card  */ }
<button className="bg-surface rounded-xl p-sm md:p-md border border-surface-container-highest shadow-sm hover:bg-surface-variant hover:border-outline-variant transition-colors flex flex-col items-center justify-center gap-sm text-center min-h-[120px]">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">translate</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">Auto-Translate</h4>
<span className="text-label-md font-label-md text-on-surface-variant">English transcript</span>
</div>
</button>
{ /*  Finalize Draft Card  */ }
<button className="col-span-2 sm:col-span-1 bg-surface rounded-xl p-sm md:p-md border border-surface-container-highest shadow-sm hover:bg-surface-variant hover:border-outline-variant transition-colors flex flex-col items-center justify-center gap-sm text-center min-h-[120px]">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">checklist</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">Review Details</h4>
<span className="text-label-md font-label-md text-on-surface-variant">Check &amp; save</span>
</div>
</button>
</div>
</div>
{ /*  Secondary Information Area (Spans 4 cols on large screens)  */ }
<div className="xl:col-span-4 flex flex-col gap-md">
{ /*  Session Progress / Process Timeline  */ }
<div className="bg-surface rounded-xl p-md border border-surface-container-highest shadow-sm">
<h3 className="text-headline-md font-headline-md text-on-surface mb-md">Story Outline</h3>
{ /*  Custom Process Timeline  */ }
<div className="relative pl-sm">
{ /*  Dashed connecting line  */ }
<div className="absolute left-[15px] top-4 bottom-4 w-px border-l-2 border-dashed border-surface-container-highest"></div>
<ul className="flex flex-col gap-md relative">
{ /*  Completed Step  */ }
<li className="flex items-start gap-md relative bg-surface p-2 -ml-2 rounded-lg">
<div className="relative z-10 w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container border-4 border-surface flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-[16px]"  >check</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">Introduction</h4>
<p className="text-body-md font-body-md text-on-surface-variant text-sm line-clamp-1 mt-xs">"Hello, my name is Elena and I have been..."</p>
<span className="inline-flex items-center gap-1 text-label-md font-label-md text-primary mt-1">
<span className="material-symbols-outlined text-[14px]">volume_up</span> 1:24
                                        </span>
</div>
</li>
{ /*  Current Step  */ }
<li className="flex items-start gap-md relative bg-surface-container-low p-2 -ml-2 rounded-lg border border-surface-container">
<div className="relative z-10 w-8 h-8 rounded-full bg-primary-container text-on-primary border-4 border-surface flex items-center justify-center shrink-0 mt-1">
<span className="text-label-md font-label-md">2</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">Materials</h4>
<p className="text-body-md font-body-md text-primary-container text-sm mt-xs flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            Ready to record
                                        </p>
</div>
</li>
{ /*  Upcoming Step  */ }
<li className="flex items-start gap-md relative bg-surface p-2 -ml-2 rounded-lg opacity-60">
<div className="relative z-10 w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant border-4 border-surface flex items-center justify-center shrink-0 mt-1">
<span className="text-label-md font-label-md">3</span>
</div>
<div>
<h4 className="text-label-lg font-label-lg text-on-surface">The Technique</h4>
<p className="text-body-md font-body-md text-on-surface-variant text-sm mt-xs">Describe the process</p>
</div>
</li>
</ul>
</div>
</div>
{ /*  Privacy & Authorship Note  */ }
<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-md shadow-sm">
<div className="flex items-start gap-sm mb-sm">
<span className="material-symbols-outlined text-secondary-fixed">shield_lock</span>
<h4 className="text-label-lg font-label-lg text-on-error">Consent &amp; Control</h4>
</div>
<p className="text-body-md font-body-md text-surface-variant text-sm">
                            You retain full authorship. Voice data is processed securely and region-level location sharing is used to protect your exact privacy while maintaining authenticity.
                        </p>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default ArtisanStoryCapture;
