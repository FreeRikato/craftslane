import React from 'react';

const ArtisanProfileSetup: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  Main Content Area - Setup Flow  */ }
<main className="flex-grow flex items-center justify-center p-margin-mobile md:p-md lg:p-lg">
<div className="w-full max-w-2xl bg-surface-container-low rounded-xl shadow-[0_4px_24px_rgba(13,61,49,0.04)] p-lg overflow-hidden relative">
{ /*  Progress Indicator  */ }
<div className="mb-xl flex items-center justify-between relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-surface-variant -z-10"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-0.5 bg-primary -z-10 transition-all duration-500"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg text-label-lg shadow-sm">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<span className="mt-base font-label-md text-label-md text-primary">Language</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg text-label-lg shadow-sm">
                        2
                    </div>
<span className="mt-base font-label-md text-label-md text-primary font-bold">Profile</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-surface text-outline flex items-center justify-center border-2 border-outline-variant font-label-lg text-label-lg">
                        3
                    </div>
<span className="mt-base font-label-md text-label-md text-outline">Details</span>
</div>
</div>
{ /*  Header  */ }
<div className="mb-lg text-center">
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome to Craftline</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Let's set up your artisan profile so seekers can find your work.</p>
</div>
{ /*  Form Content  */ }
<form className="space-y-gutter">
{ /*  Profile Photo Upload  */ }
<div className="flex flex-col items-center justify-center mb-lg">
<div className="relative group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-variant border-2 border-dashed border-outline-variant flex flex-col items-center justify-center overflow-hidden transition-colors group-hover:border-primary group-hover:bg-primary-fixed/10">
{ /*  Placeholder Icon  */ }
<span className="material-symbols-outlined text-outline text-[40px] mb-xs group-hover:text-primary transition-colors">add_a_photo</span>
<span className="font-label-md text-label-md text-outline group-hover:text-primary transition-colors">Upload Photo</span>
{ /*  Hidden File Input  */ }
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
</div>
<p className="mt-sm font-body-md text-body-md text-on-surface-variant text-center max-w-sm">
                        A clear photo of yourself at work builds trust with your audience.
                    </p>
</div>
{ /*  Input Fields  */ }
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{ /*  First Name  */ }
<div className="flex flex-col space-y-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="firstName">First Name</label>
<input className="bg-surface border border-primary text-on-surface font-body-md text-body-md rounded-lg px-sm py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow w-full placeholder:text-outline-variant" id="firstName" placeholder="e.g. Maria" type="text"/>
</div>
{ /*  Last Name  */ }
<div className="flex flex-col space-y-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="lastName">Last Name</label>
<input className="bg-surface border border-primary text-on-surface font-body-md text-body-md rounded-lg px-sm py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow w-full placeholder:text-outline-variant" id="lastName" placeholder="e.g. Santos" type="text"/>
</div>
</div>
{ /*  Location/Workshop  */ }
<div className="flex flex-col space-y-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="location">Workshop Location</label>
<div className="relative">
<span className="absolute left-sm top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">location_on</span>
<input className="bg-surface border border-primary text-on-surface font-body-md text-body-md rounded-lg pl-xl pr-sm py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow w-full placeholder:text-outline-variant" id="location" placeholder="City, Region, or Country" type="text"/>
</div>
<p className="font-body-md text-body-md text-outline-variant text-sm mt-xs">This helps seekers find local craftspeople.</p>
</div>
{ /*  Language Selection (Simulated as already completed or confirmable here)  */ }
<div className="flex flex-col space-y-xs pt-sm border-t border-surface-variant mt-md">
<label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                        Preferred Language
                        <button className="text-primary font-label-md text-label-md hover:underline" type="button">Change</button>
</label>
<div className="bg-surface border border-outline-variant rounded-lg px-sm py-sm flex items-center">
<span className="material-symbols-outlined text-primary mr-sm">language</span>
<span className="font-body-md text-body-md text-on-surface flex-grow">English (US)</span>
<span className="material-symbols-outlined text-primary">check_circle</span>
</div>
</div>
{ /*  Action Buttons  */ }
<div className="flex justify-between items-center pt-lg mt-lg">
<button className="px-md py-sm font-label-lg text-label-lg text-primary hover:bg-primary-fixed/10 rounded-lg transition-colors" type="button">
                        Back
                    </button>
<button className="px-md py-sm font-label-lg text-label-lg bg-primary text-on-primary rounded-lg shadow-sm hover:bg-on-primary-fixed-variant transition-colors flex items-center" type="button">
                        Continue
                        <span className="material-symbols-outlined ml-xs text-[20px]">arrow_forward</span>
</button>
</div>
</form>
</div>
</main>
    </div>
  );
};

export default ArtisanProfileSetup;
