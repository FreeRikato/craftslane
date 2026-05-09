import React from 'react';

const EarningsImpactInsights: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  SideNavBar (Shared Component)  */ }
<nav className="bg-surface dark:bg-primary text-primary dark:text-primary-fixed h-full w-64 fixed left-0 top-0 overflow-y-auto border-r border-outline-variant dark:border-primary-container shadow-md dark:shadow-none hidden lg:flex flex-col py-md z-40">
{ /*  Header  */ }
<div className="px-md mb-lg">
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">Craftline</h1>
<div className="mt-md flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden flex-shrink-0">
<img alt="Artisan Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a female artisan with a warm, welcoming smile. She is in a naturally lit workshop setting with a blurred background. The overall tone is grounded, human, and authentic, aligning with a modern, intentional brand identity focused on traditional craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwFBCpVgDXU_3B1rIgInmZgGsWNCvIAjcSU4DG5T3irgppjHy5mBVvcMRorKrH53pZk3HDCLWezLRfc3qKbNtfSGL8-548lAtZhO-LmYuZsXJA07li2wvV4x81NLNdL0dYtiVb5it-d8tAJwL5eB_WHGqWzzGXTpZBZVtQiDy53rgHJQuxQEKHj3NPkdfBI5sT-7Gqv7POQKaJQwaN1jFlJgmB-vc_kHfK2Tfy3thprrrCtNOykomiAU-RjJsl9XHTIsdE0UfVbo"/>
</div>
<div>
<h2 className="text-label-lg font-label-lg">Artisan Portal</h2>
<p className="text-label-md font-label-md text-on-surface-variant">Sharing your craft with the world</p>
</div>
</div>
</div>
{ /*  Main Tabs  */ }
<div className="flex-1 flex flex-col gap-xs px-sm">
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >person</span>
<span className="text-label-lg font-label-lg">Artisan Profile</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >mic</span>
<span className="text-label-lg font-label-lg">Story Capture</span>
</a>
{ /*  Active Tab  */ }
<a className="flex items-center gap-sm px-sm py-sm bg-secondary-container dark:bg-on-secondary-container text-on-secondary-container dark:text-secondary-fixed-dim rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >payments</span>
<span className="text-label-lg font-label-lg">Earnings</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >translate</span>
<span className="text-label-lg font-label-lg">Language</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >settings</span>
<span className="text-label-lg font-label-lg">Settings</span>
</a>
</div>
{ /*  CTA  */ }
<div className="px-md mt-auto mb-lg">
<button className="w-full bg-primary text-on-primary py-sm rounded-lg text-label-lg font-label-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined"  >add</span>
                Record New Story
            </button>
</div>
{ /*  Footer Tabs  */ }
<div className="px-sm flex flex-col gap-xs mt-auto pb-md">
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >lock</span>
<span className="text-label-lg font-label-lg">Privacy</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-primary-container rounded-xl mx-2 my-1 duration-200 ease-out transition-all" href="#">
<span className="material-symbols-outlined"  >help_outline</span>
<span className="text-label-lg font-label-lg">Help</span>
</a>
</div>
</nav>
{ /*  Main Content Canvas  */ }
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-md lg:p-lg max-w-container-max mx-auto w-full">
{ /*  Header Section  */ }
<header className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-surface-variant pb-md">
<div>
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-xs">Earnings &amp; Impact</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant">Track your financial growth and the cultural legacy you are building.</p>
</div>
<div className="flex items-center gap-sm">
<select className="bg-surface-container-low border border-outline-variant text-on-surface text-label-lg font-label-lg rounded-lg px-md py-sm focus:border-primary focus:ring-0 focus:outline-none appearance-none cursor-pointer pr-10 relative">
<option>Last 30 Days</option>
<option>This Quarter</option>
<option>Year to Date</option>
</select>
</div>
</header>
{ /*  Bento Grid Layout  */ }
<div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-gutter">
{ /*  Hero Stat: Total Earnings  */ }
<div className="col-span-1 md:col-span-8 bg-[#F4F7F2] rounded-xl p-md md:p-lg ambient-shadow relative overflow-hidden flex flex-col justify-between">
{ /*  Decorative background element  */ }
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-primary"  >account_balance_wallet</span>
<h3 className="text-label-lg font-label-lg text-on-surface-variant uppercase tracking-wider">Total Earnings</h3>
</div>
<div className="flex items-baseline gap-sm">
<span className="text-display-lg font-display-lg text-primary">$4,250.00</span>
<span className="text-body-md font-body-md text-secondary">+12% vs last month</span>
</div>
</div>
{ /*  Abstract Chart Representation  */ }
<div className="mt-lg h-32 flex items-end gap-2 relative z-10">
<div className="w-full bg-surface-variant/50 rounded-t-sm h-1/4 hover:bg-primary/20 transition-colors"></div>
<div className="w-full bg-surface-variant/50 rounded-t-sm h-1/3 hover:bg-primary/20 transition-colors"></div>
<div className="w-full bg-surface-variant/50 rounded-t-sm h-1/2 hover:bg-primary/20 transition-colors"></div>
<div className="w-full bg-primary/20 rounded-t-sm h-2/3 hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/40 rounded-t-sm h-full hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-primary/60 rounded-t-sm h-4/5 hover:bg-primary/70 transition-colors"></div>
<div className="w-full bg-primary rounded-t-sm h-5/6 relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-on-surface text-label-md font-label-md px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$850</div>
</div>
</div>
</div>
{ /*  Impact Metric: Adoptions  */ }
<div className="col-span-1 md:col-span-4 bg-primary text-on-primary rounded-xl p-md ambient-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-secondary-fixed"  >favorite</span>
<h3 className="text-label-lg font-label-lg text-primary-fixed uppercase tracking-wider">Crafts Adopted</h3>
</div>
<div className="text-display-lg-mobile font-display-lg-mobile mb-xs">128</div>
<p className="text-body-md font-body-md text-primary-fixed-dim">Items found new homes globally.</p>
</div>
<div className="mt-lg text-right">
<span className="text-label-md font-label-md bg-secondary-fixed text-on-secondary-fixed px-sm py-xs rounded-full">Top Region: Europe</span>
</div>
</div>
{ /*  Impact Metric: Hours Preserved  */ }
<div className="col-span-1 md:col-span-4 bg-[#F4F7F2] rounded-xl p-md ambient-shadow flex flex-col justify-between border border-surface-variant">
<div>
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-tertiary-container"  >hourglass_top</span>
<h3 className="text-label-lg font-label-lg text-on-surface-variant uppercase tracking-wider">Hours Preserved</h3>
</div>
<div className="text-display-lg-mobile font-display-lg-mobile text-primary mb-xs">840</div>
<p className="text-body-md font-body-md text-outline">Hours of traditional techniques practiced and supported.</p>
</div>
<div className="mt-md w-full bg-surface-variant rounded-full h-2">
<div className="bg-tertiary-container h-2 rounded-full"  ></div>
</div>
</div>
{ /*  Transactions List  */ }
<div className="col-span-1 md:col-span-8 bg-surface rounded-xl p-md ambient-shadow border border-surface-variant">
<div className="flex items-center justify-between mb-md">
<h3 className="text-headline-md font-headline-md text-primary">Recent Transactions</h3>
<button className="text-label-lg font-label-lg text-secondary hover:text-primary transition-colors flex items-center gap-xs">
                        View All
                        <span className="material-symbols-outlined text-sm"  >arrow_forward</span>
</button>
</div>
<div className="space-y-sm">
{ /*  Transaction Item  */ }
<div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors group">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-surface-variant rounded-lg overflow-hidden flex-shrink-0">
<img alt="Ceramic Bowl" className="w-full h-full object-cover" data-alt="A close-up view of a beautifully crafted ceramic bowl with a textured, earthy glaze. It sits on a rough wooden workbench, softly lit from the side. The image embodies the raw, tactile aesthetic of traditional craftsmanship and the warm modern design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC77KxAknqw-qU_aYxjVWjU6NckFg1E6mXrI4uYMnU6-6xizYzS5PWOIGzumAtHp3_PEy_oaMpqTQ8RFU-lCNpeZVLPbX_l91gwCkAigizM-CeeG92EY8R599wroalPUUw3NlDkZKr1IbhgVhJvIu_ncC2cuURbUg1DW_bVFYCy71kZahcuawAQuybo3K4y5XqnW6F9a5C0XoD1sw0peuEqpbhj6NFvQJBW_w5Jv6IX_y5pP_SDdKvzfRViSbFX9Gn9bl6RqRiuo9g"/>
</div>
<div>
<h4 className="text-body-lg font-body-lg text-on-surface">Hand-thrown Stoneware Bowl</h4>
<p className="text-label-md font-label-md text-outline">Adopted by Sarah M. • Oct 24, 2023</p>
</div>
</div>
<div className="text-right">
<div className="text-body-lg font-body-lg font-medium text-primary">+$120.00</div>
<span className="inline-block bg-secondary-fixed/20 text-on-secondary-container text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1">Completed</span>
</div>
</div>
{ /*  Transaction Item  */ }
<div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors group">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-surface-variant rounded-lg overflow-hidden flex-shrink-0">
<img alt="Woven Blanket" className="w-full h-full object-cover" data-alt="A detailed shot of a hand-woven textile blanket with intricate geometric patterns in natural, undyed wool colors. The fabric is draped softly, highlighting its texture and weight. The lighting is natural and diffuse, fitting the grounded, human-centric aesthetic of the artisanal platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiW4k1TiITQu39jWKni7DClxFBEYEaOcGExPiUPSGd6_HRd8YOMbgOrIJEdw2ArqK3_t5WR-Z8HpAWwpNzncSnuZ6jaop1gHf5MNj2a1JFHZAX-eCupKDSEdDDcjTi5OUBtwHnBjmYldu7nc8PaiOIhoaLWAlLoUq97nPX5Sr_EeS65cBhCV4tApJORUT_xGITl8RCCXEFmKpcExm1lyFhUL6_hvE8tAGIRjhNs4dKwTBxwVo5Ybb0imA95sATgSUJ6g-3vArUrik"/>
</div>
<div>
<h4 className="text-body-lg font-body-lg text-on-surface">Alpaca Wool Throw</h4>
<p className="text-label-md font-label-md text-outline">Adopted by James T. • Oct 22, 2023</p>
</div>
</div>
<div className="text-right">
<div className="text-body-lg font-body-lg font-medium text-primary">+$350.00</div>
<span className="inline-block bg-secondary-fixed/20 text-on-secondary-container text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1">Completed</span>
</div>
</div>
{ /*  Transaction Item  */ }
<div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors group">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-outline"  >local_shipping</span>
</div>
<div>
<h4 className="text-body-lg font-body-lg text-on-surface">Shipping Reimbursement</h4>
<p className="text-label-md font-label-md text-outline">System Transfer • Oct 20, 2023</p>
</div>
</div>
<div className="text-right">
<div className="text-body-lg font-body-lg font-medium text-primary">+$45.00</div>
<span className="inline-block bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1">Processed</span>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default EarningsImpactInsights;
