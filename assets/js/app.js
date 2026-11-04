
const portfolioRoot=document.getElementById('ms-review');
const routeNames={home:'',therapy:'therapycloud',hire:'hiremymom',haven:'haven',monu:'monucore',resume:'resume'};
const pageTitles={home:'Melissa Snow | Product, Program & Growth Leader',therapy:'TherapyCloud Case Study | Melissa Snow',hire:'HireMyMom Case Study | Melissa Snow',haven:'Haven Pet Insurance Case Study | Melissa Snow',monu:'MonuCore Case Study | Melissa Snow',resume:'Resume | Melissa Snow'};
function openPortfolioPage(name,updateHistory=true){
 if(!Object.hasOwn(routeNames,name))name='home';
 portfolioRoot.querySelectorAll('[data-view]').forEach(page=>{page.hidden=page.dataset.view!==name;});
 document.title=pageTitles[name];
 if(updateHistory)history.pushState({page:name},'',location.pathname+location.search+(routeNames[name]?'#'+routeNames[name]:''));
 portfolioRoot.scrollIntoView({block:'start'});
 const heading=portfolioRoot.querySelector('[data-view="'+name+'"] h1');
 if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
}
function currentRoute(){const hash=location.hash.slice(1);return Object.keys(routeNames).find(key=>routeNames[key]===hash)||'home';}
window.addEventListener('popstate',()=>openPortfolioPage(currentRoute(),false));
window.addEventListener('hashchange',()=>openPortfolioPage(currentRoute(),false));
portfolioRoot.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>openPortfolioPage(button.dataset.page)));
portfolioRoot.querySelectorAll('[data-home-anchor]').forEach(button=>button.addEventListener('click',()=>{openPortfolioPage('home');document.getElementById(button.dataset.homeAnchor==='enterprise'?'ms-enterprise':'ms-work').scrollIntoView({block:'start'});}));
portfolioRoot.querySelectorAll('[data-gallery]').forEach(group=>group.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{const source=document.getElementById('image-'+button.dataset.image).content;const figure=portfolioRoot.querySelector('[data-gallery-figure="'+group.dataset.gallery+'"]');figure.querySelector('img').src=source.querySelector('img').src;figure.querySelector('img').alt=source.querySelector('img').alt;figure.querySelector('figcaption').textContent=source.querySelector('span').textContent;group.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));})));
portfolioRoot.querySelectorAll('.enlarge').forEach(button=>{button.setAttribute('aria-expanded','false');button.addEventListener('click',()=>{const expanded=button.previousElementSibling.classList.toggle('expanded');button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'Reduce image':'Enlarge image';});});


const portfolioAssets={
  "asset0": "./assets/images/melissa-hero.jpg",
  "asset1": "./assets/images/therapycloud-profile-after.jpg",
  "asset2": "./assets/images/therapycloud-storefront.jpg",
  "asset3": "./assets/images/therapycloud-ce-tracking.jpg",
  "asset4": "./assets/images/hiremymom-revenue-overview.jpg",
  "asset5": "./assets/images/hiremymom-trial-performance.jpg",
  "asset6": "./assets/images/hiremymom-customer-growth.jpg",
  "asset7": "./assets/images/hiremymom-acquisition-sources.jpg",
  "asset8": "./assets/images/hiremymom-applications-hires.jpg",
  "asset9": "./assets/images/therapycloud-profile-before.jpg",
  "asset10": "./assets/images/therapycloud-product-details.jpg",
  "asset11": "./assets/images/therapycloud-sales-dashboard.jpg",
  "monu-launch": "./assets/images/monucore-launch.jpg",
  "monu-workflow": "./assets/images/monucore-workflow.jpg"
};

const assetsRoot=document.getElementById('ms-review');
function fillAssets(container){container.querySelectorAll('[data-portfolio-asset]').forEach(img=>{img.src=portfolioAssets[img.dataset.portfolioAsset];});}
fillAssets(assetsRoot);assetsRoot.querySelectorAll('template').forEach(t=>fillAssets(t.content));
const hmmRatios={overview:'676 / 626',trials:'661 / 725',growth:'661 / 863',attribution:'659 / 730',hires:'663 / 695'};
const hmmWindow=assetsRoot.querySelector('.hmm-window');
const privacyMask=document.createElement('div');privacyMask.className='company-mask';privacyMask.setAttribute('aria-hidden','true');hmmWindow.append(privacyMask);
assetsRoot.querySelectorAll('[data-hmm]').forEach(button=>button.addEventListener('click',()=>{
const name=button.dataset.hmm;const source=document.getElementById('hmm-'+name).content;
const img=document.getElementById('hmm-dashboard-image');img.src=source.querySelector('img').src;img.alt=source.querySelector('img').alt;
hmmWindow.style.aspectRatio=hmmRatios[name];hmmWindow.classList.toggle('is-growth',name==='growth');
document.getElementById('hmm-dashboard-caption').textContent=source.querySelector('span').textContent;
assetsRoot.querySelectorAll('[data-hmm]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
}));
assetsRoot.querySelector('.hmm-enlarge').addEventListener('click',event=>{const expanded=assetsRoot.querySelector('.hmm-stage').classList.toggle('is-expanded');event.currentTarget.setAttribute('aria-expanded',String(expanded));event.currentTarget.textContent=expanded?'Reduce dashboard':'Enlarge dashboard';});


const monuRoot=document.getElementById('ms-review');
monuRoot.querySelectorAll('[data-monu]').forEach(button=>button.addEventListener('click',()=>{const source=document.getElementById('monu-'+button.dataset.monu).content;const target=document.getElementById('monu-graphic');target.src=source.querySelector('img').src;target.alt=source.querySelector('img').alt;document.getElementById('monu-caption').textContent=source.querySelector('span').textContent;monuRoot.querySelectorAll('[data-monu]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));}));
monuRoot.querySelector('.monu-enlarge').addEventListener('click',event=>{const expanded=monuRoot.querySelector('.monu-stage').classList.toggle('expanded');event.currentTarget.setAttribute('aria-expanded',String(expanded));event.currentTarget.textContent=expanded?'Reduce graphic':'Enlarge graphic';});


const resumeDownload=document.querySelector('#ms-review .contact a[download]');
document.querySelectorAll('#ms-review [data-resume-download]').forEach(link=>{link.href=resumeDownload.href;link.download='Melissa-Snow-Resume.pdf';});

openPortfolioPage(currentRoute(),false);
