(function() {
    'use strict';

    // Version du script (pour le suivi)
    const SCRIPT_VERSION = '1.1.0';
    console.log(`🚀 UTM Script Version ${SCRIPT_VERSION} initialisé`);

    // Configuration des UTMs par page (votre configuration existante complète)
    const pageUtmConfig = {
        '/': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'homepage',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-analyst': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analytics_generaliste',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-analyst/paris': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analytics_paris',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-analyst/a-distance': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analytics_distance',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-analyst/champion': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analytics_champion',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-analyst/essentials': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analytics_essentials',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-scientist': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_scientist_generaliste',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-scientist/champion': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_scientist_champion',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-engineer': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_engineer_generaliste',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation-data-engineer/analytics-engineer-databird-datagen': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'analytics_engineer',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/excel': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_excel',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/power-bi': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_powerbi',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/google-sheets': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_google_sheets',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/looker-studio': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_looker_studio',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/python': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_python',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/sql': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_sql',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/formation/tableau-software': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'outils_tableau',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/certification/excel': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'certification_excel',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/certification/power-bi': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'certification_powerbi',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/campus/': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'data_analyst_distance',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
  
          // Page SEO satellites
            '/qui-sommes-nous': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'qui_sommes_nous',
            utm_content: '',
            utm_term: ''
        },
            '/parrainage': {
            utm_source: 'website',
            utm_medium: 'referral',
            utm_campaign: 'parrainage',
            utm_content: '',
            utm_term: ''
        },
            '/faq': {
            utm_source: 'website',
            utm_medium: 'organic_search',
            utm_campaign: 'faq',
            utm_content: '',
            utm_term: ''
        },
  
          // Page SEA
            '/c/google/formation-databird': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/formation-data-analyst-temps-partiel': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/formation-sql-databird': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-excel-certifiante': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/formation-data-analyst-temps-plein': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-paris-v2': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-paris': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/formation-certifiante-power-bi': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-power-bi-certifiante-v2': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-power-bi-certifiante': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/partenariat-malt-x-databird': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-a-distance': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-engineer': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/formation-tableau-software-databird': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-tableau-software': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-sql': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/toulouse': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-toulouse': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/lille': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-lille': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/lyon': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-lyon': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/nantes': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-nantes': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/nice': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-nice': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/rennes': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-rennes': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/grenoble': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-grenoble': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
         },
            '/c/ville/marseille': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-marseille': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/montpellier': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-montpellier': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/strasbourg': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-strasbourg': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/ville/bordeaux': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/google/formation-data-analyst-bordeaux': {
            utm_source: 'google',
            utm_medium: 'paid_search',
            utm_campaign: '',
            utm_content: 'cta_formulaire',
            utm_term: ''
        },
            '/c/meta/data-recrutement-quel-marche-en-2024': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/data-analyst-preparer-son-entretien-dembauche': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/salaire-data-analyst': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/montees-en-competences': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/reconversion': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/data-essentials': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
        },
            '/c/meta/formation-data-analyst': {
            utm_source: 'facebook',
            utm_medium: 'paid_social',
            utm_campaign: '',
            utm_content: '',
            utm_term: ''
          },
  
          // Ajoutez d'autres pages selon vos besoins
          // '/page-example': {
          //   utm_source: 'website',
          //   utm_medium: 'example_page',
          //   utm_campaign: 'specific_campaign'
          // },
        };

// Fonction pour obtenir les UTMs de l'URL avec logs améliorés
    function getUrlUtms() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = {};
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
            if (urlParams.has(param)) {
                utmParams[param] = urlParams.get(param);
            }
        });
        
        console.log('🔍 Recherche des UTMs dans l\'URL :', {
            urlComplete: window.location.href,
            utmsTrouves: Object.keys(utmParams).length > 0 ? utmParams : 'Aucun UTM trouvé dans l\'URL'
        });
        
        return utmParams;
    }

    // Fonction pour sauvegarder les UTMs initiaux dans sessionStorage
    function saveInitialUtms(utms) {
        if (!sessionStorage.getItem('initialUtms')) {
            sessionStorage.setItem('initialUtms', JSON.stringify(utms));
            console.log('💾 UTMs initiaux sauvegardés:', utms);
        } else {
            console.log('ℹ️ UTMs déjà présents en session');
        }
    }

    // Fonction pour récupérer les UTMs initiaux stockés
    function getStoredInitialUtms() {
        const initialUtms = sessionStorage.getItem('initialUtms');
        if (initialUtms) {
            console.log('📥 UTMs récupérés de la session:', JSON.parse(initialUtms));
            return JSON.parse(initialUtms);
        }
        console.log('ℹ️ Aucun UTM trouvé en session');
        return null;
    }

    // Fonction pour obtenir les UTMs finaux avec logs améliorés
    function getFinalUtms() {
        console.group('📊 Détermination des UTMs finaux');
        const storedInitialUtms = getStoredInitialUtms();
        const urlUtms = getUrlUtms();
        const path = window.location.pathname;
        
        let defaultUtms = {
            utm_source: 'website',
            utm_medium: 'unknown_page',
            utm_campaign: 'general',
            utm_content: 'cta_formulaire',
            utm_term: ''
        };

        // Recherche des UTMs correspondant au chemin actuel
        if (path.startsWith('/campus/')) {
            defaultUtms = {...pageUtmConfig['/campus/']};
            const cityName = path.split('/').pop();
            defaultUtms.utm_campaign = `data_analyst_distance_${cityName}`;
            console.log('🏢 UTMs spécifiques au campus trouvés pour:', cityName);
        } else {
            defaultUtms = pageUtmConfig[path] || defaultUtms;
            console.log('📍 Chemin actuel:', path);
        }

        let finalUtms;

        if (storedInitialUtms) {
            finalUtms = storedInitialUtms;
            console.log('🔄 Utilisation des UTMs de session');
        } else if (Object.keys(urlUtms).length > 0) {
            finalUtms = {...defaultUtms, ...urlUtms};
            saveInitialUtms(finalUtms);
            console.log('🆕 Nouveaux UTMs de l\'URL utilisés et sauvegardés');
        } else {
            finalUtms = defaultUtms;
            console.log('📝 UTMs par défaut utilisés');
        }

        console.log('✅ UTMs finaux:', finalUtms);
        console.groupEnd();
        return finalUtms;
    }

    // Fonction pour ajouter les UTMs au formulaire avec logs améliorés
    function addUtmsToForm(form) {
        console.group('📝 Ajout des UTMs au formulaire');
        const utmParams = getFinalUtms();

        for (const [key, value] of Object.entries(utmParams)) {
            let input = form.querySelector(`input[name="${key}"]`);
            if (!input) {
                input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                form.appendChild(input);
                console.log(`➕ Nouveau champ créé: ${key}`);
            } else {
                console.log(`🔄 Champ existant trouvé: ${key}`);
            }
            input.value = value;
            console.log(`📌 ${key} = ${value}`);
        }

        const formData = new FormData(form);
        console.log('📋 Récapitulatif des UTMs dans le formulaire:', 
            Object.fromEntries([...formData.entries()]
                .filter(([key]) => key.startsWith('utm_')))
        );
        console.groupEnd();
    }
    
// Fonction pour trouver le formulaire
function findForm(container) {
  let form = container.querySelector('form');
  if (form) {
    console.log('Formulaire trouvé directement dans le conteneur');
    return form;
  }

  const iframes = container.querySelectorAll('iframe');
  for (const iframe of iframes) {
    try {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      form = iframeDocument.querySelector('form');
      if (form) {
        console.log('Formulaire trouvé dans un iframe');
        return form;
      }
    } catch (e) {
      console.log('Impossible d\'accéder au contenu de l\'iframe, probablement à cause de la politique de même origine');
    }
  }

  const hsFormElement = container.querySelector('.hs-form') || 
                        (iframes[0] && iframes[0].contentDocument.querySelector('.hs-form'));
  if (hsFormElement) {
    console.log('Élément hs-form trouvé, utilisation comme formulaire');
    return hsFormElement;
  }

  console.log('Aucun formulaire trouvé');
  return null;
}

// Fonction pour trouver le planificateur de réunions
function findHubSpotMeetingsWidget() {
  return document.querySelector('.meetings-iframe-container iframe');
}

// Fonction pour injecter les utms dans le planificateur de réunions
function injectUtmsIntoMeetingsWidget(iframe, utms) {
  // Obtenir l'URL actuelle de l'iframe
  let currentSrc = iframe.src;
  const url = new URL(currentSrc);

  // Ajouter les UTMs comme paramètres de requête
  for (const [key, value] of Object.entries(utms)) {
    url.searchParams.set(key, value);
  }

  // Mettre à jour l'URL de l'iframe avec les nouveaux paramètres
  iframe.src = url.toString();
  
  console.log('UTMs ajoutés à l\'URL du planificateur de réunions HubSpot:', url.toString());
}

// Fonction pour observer les changements dans le conteneur du formulaire
function observeFormContainer() {
  const container = document.querySelector('[data-hubspot-form-container="true"]');
  const meetingsWidget = findHubSpotMeetingsWidget();

  if (meetingsWidget) {
    console.log('Planificateur de réunions HubSpot trouvé');
    const utms = getFinalUtms();
    injectUtmsIntoMeetingsWidget(meetingsWidget, utms);
    return;
  }

  if (!container) {
    console.log('Conteneur du formulaire HubSpot non trouvé, nouvelle tentative dans 1 seconde');
    setTimeout(observeFormContainer, 1000);
    return;
  }

  console.log('Conteneur du formulaire HubSpot trouvé, début de l\'observation');
  
  const checkForForm = () => {
    const form = findForm(container);
    if (form) {
      console.log('Formulaire HubSpot trouvé');
      addUtmsToForm(form);
      
      form.addEventListener('submit', function(event) {
        console.log('Formulaire soumis, vérification finale des UTMs');
        addUtmsToForm(form);
        
        const formData = new FormData(this);
        console.log('Données du formulaire envoyées à HubSpot:');
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      });
      
      return true;
    }
    return false;
  };

  if (checkForForm()) return;

  const observer = new MutationObserver((mutations) => {
    if (checkForForm()) {
      observer.disconnect();
    }
  });

  observer.observe(container, { childList: true, subtree: true });

  let observationTime = 0;
  const maxObservationTime = 60000; // 60 secondes maximum d'observation

  const checkInterval = setInterval(() => {
    observationTime += 1000;
    console.log(`Temps d'observation: ${observationTime}ms`);
    
    if (checkForForm() || observationTime >= maxObservationTime) {
      clearInterval(checkInterval);
      observer.disconnect();
      if (observationTime >= maxObservationTime) {
        console.log('Temps maximum d\'observation atteint, formulaire non trouvé');
      }
    }
  }, 1000);
}

// Fonction principale
    function main() {
        console.log('🎯 Script UTM chargé et initialisé');
        getFinalUtms();
        observeFormContainer();
    }

    // Exécution du script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }

})();
