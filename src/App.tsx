
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import DiscoveryHome from './screens/DiscoveryHome';
import CuratedStories from './screens/CuratedStories';
import ArtisanProductStory from './screens/ArtisanProductStory';
import ArtisanStoryCapture from './screens/ArtisanStoryCapture';
import ConsentPrivacyDashboard from './screens/ConsentPrivacyDashboard';
import EarningsImpactInsights from './screens/EarningsImpactInsights';
import ArtisanDashboard from './screens/ArtisanDashboard';
import ArtisanProfileSetup from './screens/ArtisanProfileSetup';
import ProductCatalog from './screens/ProductCatalog';
import ImpactCheckout from './screens/ImpactCheckout';

const Home = () => (
  <div className="min-h-screen bg-background font-body-md text-on-background p-md max-w-container-max mx-auto">
    <h1 className="text-display-lg text-primary mb-md font-bold">Stitch UI Implementations</h1>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
      <li><Link to="/discovery-home" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Discovery Home</Link></li>
      <li><Link to="/curated-stories" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Curated Stories</Link></li>
      <li><Link to="/artisan-product-story" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Artisan & Product Story</Link></li>
      <li><Link to="/artisan-story-capture" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Artisan Story Capture</Link></li>
      <li><Link to="/consent-privacy-dashboard" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Consent & Privacy Dashboard</Link></li>
      <li><Link to="/earnings-impact-insights" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Earnings & Impact Insights</Link></li>
      <li><Link to="/artisan-dashboard" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Artisan Dashboard</Link></li>
      <li><Link to="/artisan-profile-setup" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Artisan Profile Setup</Link></li>
      <li><Link to="/product-catalog" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Product Catalog</Link></li>
      <li><Link to="/impact-checkout" className="text-secondary hover:text-secondary-fixed-dim transition-colors text-headline-md block p-sm border border-outline-variant/30 rounded-lg shadow-sm hover:shadow-md bg-surface">Impact Checkout</Link></li>
    </ul>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery-home" element={<DiscoveryHome />} />
        <Route path="/curated-stories" element={<CuratedStories />} />
        <Route path="/artisan-product-story" element={<ArtisanProductStory />} />
        <Route path="/artisan-story-capture" element={<ArtisanStoryCapture />} />
        <Route path="/consent-privacy-dashboard" element={<ConsentPrivacyDashboard />} />
        <Route path="/earnings-impact-insights" element={<EarningsImpactInsights />} />
        <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
        <Route path="/artisan-profile-setup" element={<ArtisanProfileSetup />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/impact-checkout" element={<ImpactCheckout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
