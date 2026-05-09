import React from 'react';

const ImpactCheckout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-background">
      { /*  TopNavBar (Suppressed due to linear checkout flow constraint)  */ }
{ /*  Content logic: "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: Linear/Transactional: Login, Sign-up, Onboarding, Checkout..."  */ }
<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-lg md:py-xl">
<header className="mb-lg md:mb-xl text-center">
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-sm">Secure Checkout</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Your purchase directly supports the artisan's craft and community.</p>
</header>
<div className="flex flex-col lg:flex-row gap-gutter">
{ /*  Main Checkout Flow  */ }
<div className="flex-grow lg:w-2/3 space-y-md">
{ /*  Steps Indicator  */ }
<div className="flex items-center justify-between mb-lg px-md">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg text-label-lg mb-xs">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="font-label-md text-label-md text-primary">Shipping</span>
</div>
<div className="flex-grow h-[1px] bg-primary mx-sm mb-5"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center font-label-lg text-label-lg mb-xs">
                            2
                        </div>
<span className="font-label-md text-label-md text-primary font-bold">Payment</span>
</div>
<div className="flex-grow h-[1px] bg-outline-variant mx-sm mb-5"></div>
<div className="flex flex-col items-center opacity-50">
<div className="w-8 h-8 rounded-full border-2 border-outline-variant text-outline-variant flex items-center justify-center font-label-lg text-label-lg mb-xs">
                            3
                        </div>
<span className="font-label-md text-label-md text-outline-variant">Review</span>
</div>
</div>
{ /*  Payment Form Section  */ }
<section className="bg-surface-container-low rounded-xl p-md md:p-lg shadow-sm border border-surface-variant">
<h2 className="font-headline-md text-headline-md text-primary mb-md">Payment Details</h2>
<form className="space-y-md">
<div className="space-y-sm">
<label className="block font-label-lg text-label-lg text-on-surface">Card Information</label>
<div className="border border-primary rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-shadow">
<input aria-label="Card number" className="w-full border-0 focus:ring-0 bg-transparent px-sm py-sm font-body-md text-body-md text-on-surface placeholder-outline" placeholder="Card number" type="text"/>
<div className="flex border-t border-surface-variant">
<input aria-label="Expiration Date" className="w-1/2 border-0 border-r border-surface-variant focus:ring-0 bg-transparent px-sm py-sm font-body-md text-body-md text-on-surface placeholder-outline" placeholder="MM / YY" type="text"/>
<input aria-label="CVC" className="w-1/2 border-0 focus:ring-0 bg-transparent px-sm py-sm font-body-md text-body-md text-on-surface placeholder-outline" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<div className="space-y-sm">
<label className="block font-label-lg text-label-lg text-on-surface">Name on Card</label>
<input className="w-full border border-primary rounded-lg px-sm py-sm focus:ring-2 focus:ring-primary focus:border-primary bg-transparent font-body-md text-body-md text-on-surface placeholder-outline transition-shadow" placeholder="Full name" type="text"/>
</div>
{ /*  Billing Address Toggle  */ }
<div className="pt-sm">
<label className="flex items-center gap-sm cursor-pointer group">
<input checked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Billing address is same as shipping</span>
</label>
</div>
</form>
</section>
{ /*  Actions  */ }
<div className="flex justify-between items-center pt-md">
<button className="text-on-surface-variant hover:text-primary font-label-lg text-label-lg flex items-center gap-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Shipping
                    </button>
<button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-lg text-label-lg hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-sm">
                        Continue to Review
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{ /*  Order Summary Sidebar  */ }
<aside className="w-full lg:w-1/3">
<div className="bg-surface-container-low rounded-xl p-md shadow-sm border border-surface-variant sticky top-md">
<h3 className="font-headline-md text-headline-md text-primary mb-md">Order Summary</h3>
{ /*  Item  */ }
<div className="flex gap-sm pb-md border-b border-surface-variant mb-md">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
<img alt="Hand-carved wooden bowl" className="w-full h-full object-cover" data-alt="A close-up shot of a beautifully hand-carved wooden bowl resting on a rustic workbench. The wood grain is rich and warm, illuminated by soft, natural light coming from a nearby window. The scene evokes a sense of traditional craftsmanship and organic modernity, fitting a slow-living aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrijGG5kYqecpd7dDF-AMSSAt3xsZg6Ffj_JJZydbDld_u_g9aGIia-r9bDDILQTnYqtQtW__ReLERbo30v7jVE8GdDnHemAxYMSBrdh-QfF85D0RABMEI4JVEhrD1q2IRUEH5WtO-bULby_OXRp1ekjHq4LR7piR6YBtOukI7GqVcaz38QhYNov3sthC_XH02LFaAUQ2jTyQ7B6cDwDNwbONvPKzUItWHMnla9IZZ4U2uzxNKkCSwm3Xhl51WK8QgRm_vEVm26aA"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Hand-carved Olive Wood Bowl</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">By Mateo R.</p>
</div>
<span className="font-label-lg text-label-lg text-primary">$125.00</span>
</div>
</div>
{ /*  Financials  */ }
<div className="space-y-xs pb-md border-b border-surface-variant mb-md">
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>$125.00</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Shipping</span>
<span>$12.00</span>
</div>
<div className="flex justify-between font-headline-md text-headline-md text-primary pt-sm">
<span>Total</span>
<span>$137.00</span>
</div>
</div>
{ /*  Impact Breakdown (Bento-style visual)  */ }
<div className="bg-surface rounded-lg p-sm border border-primary-fixed-dim relative overflow-hidden group">
{ /*  Decorative background subtle gradient  */ }
<div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/30 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h5 className="font-label-lg text-label-lg text-primary mb-xs flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">eco</span>
                                Your Impact
                            </h5>
<p className="font-body-md text-body-md text-on-surface-variant text-[13px] mb-sm leading-tight">Here is exactly where your money goes.</p>
<div className="space-y-sm">
{ /*  Artisan Share  */ }
<div>
<div className="flex justify-between font-label-md text-label-md text-primary mb-[2px]">
<span>Artisan Earnings (85%)</span>
<span>$106.25</span>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[85%] rounded-full"></div>
</div>
</div>
{ /*  Platform Share  */ }
<div>
<div className="flex justify-between font-label-md text-label-md text-outline mb-[2px]">
<span>Platform &amp; Sustain (15%)</span>
<span>$18.75</span>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-outline-variant w-[15%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
<button className="w-full mt-md bg-primary text-on-primary py-sm rounded-lg font-label-lg text-label-lg hover:bg-on-primary-fixed-variant transition-colors flex justify-center items-center gap-sm">
                        Confirm Adoption
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<p className="text-center font-label-md text-label-md text-outline mt-sm flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[14px]">lock</span>
                        Secure, encrypted transaction
                    </p>
</div>
</aside>
</div>
</main>
    </div>
  );
};

export default ImpactCheckout;
